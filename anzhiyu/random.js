var posts=["2025/04/14/CTF-Web-PHP-RCE/","2025/02/28/HTML基本语法/","2025/02/28/PHP基础语法/","2016/03/30/flag/","2025/04/22/XSS简记/","2025/02/17/python基础/","2025/02/10/unity3D开发笔记/","2025/05/11/misc-压缩包/","2025/01/12/个人简介/","2025/09/14/记一道TLS加密流量分析/","2025/05/20/基于hexo框架的博客搭建及魔改美化教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"C联官网","link":"https://clian.czxh.top","avatar":"/pic/c0101.png","descr":"愚者以幻想的律法构造世界，人们却称之为希望","siteshot":"https://pic1.imgdb.cn/item/68c824c0c5157e1a88080188.png"},{"name":"C联盟主のblog","link":"https://czxh.top","avatar":"/pic/xiaoyuan.jpg","descr":"我们拥护万界内的唯一至尊","siteshot":"https://pic1.imgdb.cn/item/68c822d0c5157e1a8807ff4f.png"},{"name":"Hexo","link":"https://hexo.io/zh-cn/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网志框架"},{"name":"Fomalhaut🥝","link":"https://fomal.cc/","avatar":"https://pic1.imgdb.cn/item/6850f14458cb8da5c85315ea.webp","descr":"Future is now 🍭🍭🍭"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"UKFC","link":"https://ukfc.twilightly.top/","avatar":"/pic/ukfc_gray.png","descr":"UKFC官网"},{"name":"Mitunlny|M.Y","link":"https://czxh.top/","avatar":"/pic/MY.jpg","descr":"misc&web"},{"name":"大鹅","link":"https://xxxqfs.github.io/","avatar":"/pic/dae.jpg","descr":"reverse"},{"name":"xieqwer","link":"https://xieqwer.github.io/","avatar":"/pic/qwer.jpg","descr":"web"},{"name":"loO","link":"https://lo-o-github-io.vercel.app/","avatar":"https://pic1.imgdb.cn/item/6850ed3058cb8da5c8530f0e.png","descr":"pwn"},{"name":"DashingBug","link":"https://dashingbug.xin/","avatar":"https://pic1.imgdb.cn/item/6853ae5258cb8da5c85b495a.png","descr":"web"},{"name":"L4N","link":"https://l4n.top/","avatar":"/pic/l4n.jpg","descr":"reverse"},{"name":"lufiende","link":"https://blog.lufiende.work/","avatar":"https://pic1.imgdb.cn/item/67e915710ba3d5a1d7e6bbed.png","descr":"pwn&misc"},{"name":"a1te","link":"https://a1te.top/","avatar":"https://pic1.imgdb.cn/item/6850eea358cb8da5c853101a.png","descr":"pwn"},{"name":"sekiro","link":"https://www.sekiro.love/","avatar":"https://pic1.imgdb.cn/item/67e916f80ba3d5a1d7e6bd46.png","descr":"pwn"},{"name":"aniale","link":"https://aniale.top/blog/","avatar":"https://pic1.imgdb.cn/item/67e917760ba3d5a1d7e6bdcb.jpg","descr":"web"},{"name":"Twilightly","link":"https://www.twilightly.top/","avatar":"https://pic1.imgdb.cn/item/67e926780ba3d5a1d7e6c30e.jpg","descr":"web"},{"name":"shimmer","link":"https://shimmer123456.github.io/","avatar":"https://pic1.imgdb.cn/item/6818b55a58cb8da5c8ddc4df.png","descr":"reverse"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };