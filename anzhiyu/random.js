var posts=["2025/04/14/CTF-Web-PHP-RCE/","2025/02/28/HTML基本语法/","2025/11/02/webshell流量深入理解/","2016/03/30/flag/","2025/10/28/windows11还原磁贴功能/","2025/02/10/unity3D开发笔记/","2025/01/12/个人简介/","2025/11/03/友链页面加密/","2025/05/20/基于hexo框架的博客搭建及魔改美化教程/","2025/10/12/学生请假条生成系统/","2025/10/28/题目复现文档/","2025/09/14/记一道TLS加密流量分析/","2025/10/31/深入理解zip伪加密/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-cn/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网志框架"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"Mo的记事簿","link":"https://blog.xiowo.net/","avatar":"https://blog.xiowo.net/img/avatar.png","descr":"万年鸽王，哈哈OvO","siteshot":"https://bu.dusays.com/2025/06/17/685044d6bca69.png"},{"name":"UKFC","link":"https://ukfc.twilightly.top/","avatar":"https://czxh.oss-cn-beijing.aliyuncs.com/pic/202512082354604.png","descr":"UKFC安全团队","siteshot":"https://czxh.oss-cn-beijing.aliyuncs.com/pic/202512090001563.png"},{"name":"V&N","link":"https://vnteam.cn/","avatar":"https://czxh.oss-cn-beijing.aliyuncs.com/pic/202512090007814.png","descr":"V&N联合战队","siteshot":"https://czxh.oss-cn-beijing.aliyuncs.com/pic/202512090007754.png"},{"name":"lufiende","link":"https://blog.lufiende.work/","avatar":"https://pic1.imgdb.cn/item/67e915710ba3d5a1d7e6bbed.png","descr":"pwn&misc"},{"name":"大鹅","link":"https://xxxqfs.github.io/","avatar":"/pic/dae.jpg","descr":"reverse"},{"name":"Y&Y","link":"http://singlehorn.github.io","avatar":"https://singlehorn.github.io/images/avatar.jpg","descr":"reverse@V&N"},{"name":"xieqwer","link":"https://xieqwer.github.io/","avatar":"https://xieqwer.top/image/hutao01.jpg","descr":"web"},{"name":"Jiucheng","link":"https://tgvhzg.github.io/","avatar":"https://tgvhzg.github.io/pic/head.jpg","descr":"misc"},{"name":"loo","link":"https://lo-o-github-io.vercel.app/","avatar":"https://pic1.imgdb.cn/item/6850ed3058cb8da5c8530f0e.png","descr":"pwn@V&N"},{"name":"DashingBug","link":"https://dashingbug.xin/","avatar":"https://pic1.imgdb.cn/item/6853ae5258cb8da5c85b495a.png","descr":"web@NepNep"},{"name":"L4N","link":"https://l4n.top/","avatar":"/pic/l4n.jpg","descr":"reverse@W&M"},{"name":"aniale","link":"https://aniale.top/blog/","avatar":"https://pic1.imgdb.cn/item/67e917760ba3d5a1d7e6bdcb.jpg","descr":"web@V&N"},{"name":"Twilightly","link":"https://www.twilightly.top/","avatar":"https://pic1.imgdb.cn/item/67e926780ba3d5a1d7e6c30e.jpg","descr":"web"},{"name":null,"link":"https://c3ngh.top/","avatar":"https://c3ngh-blog.oss-cn-hangzhou.aliyuncs.com/img/C3ngH-six.png","descr":"misc"},{"name":"Yolo","link":"https://yo1o.top/","avatar":"https://yo1o.top/images/avatars/Yolo.jpg","descr":"misc"}];
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