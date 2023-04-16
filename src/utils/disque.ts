export function loadDisque(
  comicSlug: string,
  url: string,
  disqus_shortname: string
) {
  if (document.getElementById("disq_load")) {
    document.getElementById("disq_load")!.style.display = "none";
  }
  var disqus_config = function (this: any) {
    this.page.url = url; // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = comicSlug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };

  (function () {
    var d = document,
      s = d.createElement("script");
    s.src = "https://" + disqus_shortname + ".disqus.com/embed.js";

    s.setAttribute("data-timestamp", new Date().toDateString());
    (d.head || d.body).appendChild(s);
  })();
}
