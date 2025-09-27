#!/usr/bin/env node

/**
 * 快速提交脚本 - 将所有重要页面提交到搜索引擎
 * 使用方法: node scripts/submit-to-search-engines.js
 */

const https = require('https');
const http = require('http');

const SITE_URL = 'https://policesketchmaker.it.com';
const API_ENDPOINT = '/api/submit-to-search-engines';

// 如果在本地开发环境，使用localhost
const isDevelopment = process.env.NODE_ENV !== 'production';
const baseUrl = isDevelopment ? 'http://localhost:3000' : SITE_URL;

function makeRequest(url, data) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const client = urlObj.protocol === 'https:' ? https : http;
    
    const req = client.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const result = JSON.parse(responseData);
          resolve({ status: res.statusCode, data: result });
        } catch (error) {
          resolve({ status: res.statusCode, data: responseData });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

async function submitAllPages() {
  console.log('🚀 开始提交所有页面到搜索引擎...');
  console.log(`📍 目标网站: ${baseUrl}`);
  
  const requestData = JSON.stringify({ action: 'all' });
  
  try {
    const response = await makeRequest(`${baseUrl}${API_ENDPOINT}`, requestData);
    
    if (response.status === 200 && response.data.success) {
      console.log('✅ 提交成功!');
      console.log(`📊 已提交 ${response.data.submittedUrls.length} 个页面:`);
      response.data.submittedUrls.forEach(url => {
        console.log(`   • ${url}`);
      });
      console.log(`🔍 支持的搜索引擎: ${response.data.searchEngines.join(', ')}`);
      console.log(`⏰ 提交时间: ${response.data.timestamp}`);
      
      console.log('\n🎯 预期效果:');
      console.log('   • Bing: 1-24小时内索引');
      console.log('   • Yandex: 2-48小时内索引');
      console.log('   • 其他IndexNow支持的搜索引擎: 1-48小时内索引');
      
    } else {
      console.error('❌ 提交失败:', response.data);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ 网络错误:', error.message);
    process.exit(1);
  }
}

async function checkStatus() {
  console.log('🔍 检查IndexNow API状态...');
  
  try {
    const response = await makeRequest(`${baseUrl}${API_ENDPOINT}`, '{}');
    
    if (response.status === 200) {
      console.log('✅ IndexNow API 正常运行');
      console.log(`📋 API描述: ${response.data.description}`);
      console.log(`🔍 支持的搜索引擎: ${response.data.supportedSearchEngines.join(', ')}`);
    } else {
      console.error('⚠️ API状态异常:', response.status);
    }
  } catch (error) {
    console.error('❌ 无法连接到API:', error.message);
  }
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--status') || args.includes('-s')) {
    await checkStatus();
    return;
  }
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
🔍 IndexNow 搜索引擎提交工具

使用方法:
  node scripts/submit-to-search-engines.js        提交所有页面
  node scripts/submit-to-search-engines.js -s     检查API状态
  node scripts/submit-to-search-engines.js -h     显示帮助

环境变量:
  NODE_ENV=production                              使用生产环境URL
  NODE_ENV=development (默认)                      使用本地开发URL

功能说明:
  • 自动提交所有重要页面到支持IndexNow的搜索引擎
  • 支持Bing、Yandex等主流搜索引擎
  • 实时反馈提交结果和预期索引时间
    `);
    return;
  }
  
  await checkStatus();
  console.log('');
  await submitAllPages();
  
  console.log('\n📝 后续建议:');
  console.log('   1. 手动提交站点地图到 Google Search Console');
  console.log('   2. 在百度搜索资源平台验证网站并提交站点地图');
  console.log('   3. 一周后检查各搜索引擎的索引情况');
  console.log('   4. 设置定期任务每周运行此脚本');
}

// 运行主函数
main().catch(error => {
  console.error('💥 脚本执行失败:', error);
  process.exit(1);
}); 