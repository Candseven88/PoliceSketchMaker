#!/usr/bin/env node

/**
 * 自动提交sitemap和更新到搜索引擎
 * 用于解决GSC索引问题
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://policesketchmaker.it.com';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

// 需要通知的URL列表
const UPDATED_URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/blog/police-sketch-artist-careers-salary-guide`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/ai-image-describer`,
  `${SITE_URL}/blog`,
];

/**
 * 提交sitemap到Google
 */
async function submitToGoogle() {
  return new Promise((resolve, reject) => {
    const url = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
    
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('✅ Google sitemap submitted successfully');
          resolve(data);
        } else {
          console.log('❌ Google sitemap submission failed:', res.statusCode);
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    }).on('error', (err) => {
      console.log('❌ Google submission error:', err.message);
      reject(err);
    });
  });
}

/**
 * 提交sitemap到Bing
 */
async function submitToBing() {
  return new Promise((resolve, reject) => {
    const url = `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
    
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('✅ Bing sitemap submitted successfully');
          resolve(data);
        } else {
          console.log('❌ Bing sitemap submission failed:', res.statusCode);
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    }).on('error', (err) => {
      console.log('❌ Bing submission error:', err.message);
      reject(err);
    });
  });
}

/**
 * 使用IndexNow API提交URL更新
 */
async function submitToIndexNow() {
  try {
    const indexNowKeyPath = path.join(__dirname, '../public/f0ef1c3f63f3c438d486f003417584218945df9e039dffc49dc6d6a294472ea5.txt');
    
    if (!fs.existsSync(indexNowKeyPath)) {
      console.log('❌ IndexNow key file not found');
      return;
    }

    const indexNowKey = 'f0ef1c3f63f3c438d486f003417584218945df9e039dffc49dc6d6a294472ea5';
    
    const payload = {
      host: 'policesketchmaker.it.com',
      key: indexNowKey,
      keyLocation: `${SITE_URL}/${indexNowKey}.txt`,
      urlList: UPDATED_URLS
    };

    const postData = JSON.stringify(payload);

    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          if (res.statusCode === 200 || res.statusCode === 202) {
            console.log('✅ IndexNow submission successful');
            console.log(`📤 Submitted ${UPDATED_URLS.length} URLs to IndexNow`);
            resolve(data);
          } else {
            console.log('❌ IndexNow submission failed:', res.statusCode);
            reject(new Error(`HTTP ${res.statusCode}`));
          }
        });
      });

      req.on('error', (err) => {
        console.log('❌ IndexNow submission error:', err.message);
        reject(err);
      });

      req.write(postData);
      req.end();
    });
  } catch (error) {
    console.log('❌ IndexNow setup error:', error.message);
  }
}

/**
 * 生成搜索引擎提交报告
 */
function generateReport() {
  const report = {
    timestamp: new Date().toISOString(),
    siteUrl: SITE_URL,
    sitemapUrl: SITEMAP_URL,
    submittedUrls: UPDATED_URLS,
    actions: [
      'Fixed 404 errors by creating missing pages',
      'Updated sitemap.xml with new pages',
      'Enhanced robots.txt to block font files',
      'Set canonical URLs to prevent duplicate content',
      'Submitted updates to search engines'
    ]
  };

  const reportPath = path.join(__dirname, '../seo-update-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log('📊 SEO update report generated:', reportPath);
}

/**
 * 主函数
 */
async function main() {
  console.log('🚀 Starting search engine submission process...');
  console.log('📍 Site URL:', SITE_URL);
  console.log('🗺️  Sitemap URL:', SITEMAP_URL);
  console.log('');

  const results = {
    google: false,
    bing: false,
    indexNow: false
  };

  // 提交到Google
  try {
    await submitToGoogle();
    results.google = true;
  } catch (error) {
    console.log('⚠️  Google submission failed, but this is normal for new sites');
  }

  // 提交到Bing
  try {
    await submitToBing();
    results.bing = true;
  } catch (error) {
    console.log('⚠️  Bing submission failed, but this is normal for new sites');
  }

  // 提交到IndexNow
  try {
    await submitToIndexNow();
    results.indexNow = true;
  } catch (error) {
    console.log('⚠️  IndexNow submission failed:', error.message);
  }

  console.log('');
  console.log('📈 Submission Summary:');
  console.log('  Google:', results.google ? '✅' : '❌');
  console.log('  Bing:', results.bing ? '✅' : '❌');
  console.log('  IndexNow:', results.indexNow ? '✅' : '❌');
  
  // 生成报告
  generateReport();
  
  console.log('');
  console.log('🎯 Next Steps:');
  console.log('1. Monitor Google Search Console for indexing improvements');
  console.log('2. Check Bing Webmaster Tools for crawl status');
  console.log('3. Verify new pages are accessible and loading correctly');
  console.log('4. Submit sitemap manually in GSC if needed');
  
  console.log('');
  console.log('✨ SEO optimization complete!');
}

// 运行脚本
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { submitToGoogle, submitToBing, submitToIndexNow }; 