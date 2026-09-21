// Auto-resize for embedded FastX Shopping widget iframes.
// The widget posts { type: "fastx-widget-height", height } via postMessage.
(function () {
  function findWidgetIframe(event) {
    var iframes = document.querySelectorAll('iframe[src*="demo_fastx_shopping/widget.html"], iframe[src*="demo_fastx_content/widget.html"]');
    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].contentWindow === event.source) return iframes[i];
    }
    return null;
  }

  window.addEventListener("message", function (event) {
    var data = event && event.data;
    if (!data || data.type !== "fastx-widget-height" || typeof data.height !== "number") return;

    var iframe = findWidgetIframe(event);
    if (!iframe) return;

    var newHeight = Math.max(420, Math.ceil(data.height) + 16);
    iframe.setAttribute("height", String(newHeight));
    iframe.style.height = newHeight + "px";
  });
})();
