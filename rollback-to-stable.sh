#!/bin/bash

# 回退到稳定版本 v1.2.0 的脚本
# AI Image Describer完整功能版本

echo "🔄 正在回退到稳定版本 v1.2.0..."
echo "📋 版本信息：AI Image Describer完整功能版本"
echo ""

# 检查是否有未提交的更改
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  检测到未提交的更改"
    echo "请选择操作："
    echo "1. 保存当前更改并回退"
    echo "2. 丢弃当前更改并回退"  
    echo "3. 取消回退"
    read -p "请输入选择 (1/2/3): " choice
    
    case $choice in
        1)
            echo "💾 保存当前更改..."
            git add .
            git commit -m "临时保存：回退前的更改 $(date '+%Y-%m-%d %H:%M:%S')"
            ;;
        2)
            echo "🗑️  丢弃当前更改..."
            git reset --hard HEAD
            ;;
        3)
            echo "❌ 取消回退"
            exit 0
            ;;
        *)
            echo "❌ 无效选择，取消回退"
            exit 1
            ;;
    esac
fi

# 回退到指定版本
echo "🔄 回退到 v1.2.0..."
git reset --hard v1.2.0

echo ""
echo "✅ 成功回退到稳定版本 v1.2.0"
echo "📋 版本特性："
echo "   ✅ AI图像描述和Alt Text生成功能完全正常"
echo "   ✅ GLM-4.5V模型集成"
echo "   ✅ 页面布局和SEO优化完成"
echo "   ✅ 清理不相关链接和内容"
echo "   ✅ 所有API端点测试通过"
echo ""
echo "🚀 可以运行 'npm run dev' 启动开发服务器" 