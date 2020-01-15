###
 # @Author: your name
 # @Date: 2020-01-15 23:32:15
 # @LastEditTime: 2020-01-15 23:33:08
 # @LastEditors: your name
 # @Description: In User Settings Edit
 # @FilePath: \vuepress-blog-demof:\myVuepress\deploy2.sh
 ###
set -e

git add -A
git commit -m 'deploy 更新'
git push origin master
cd -