(function() {
  if (document.getElementById('fundflow-widget-js')) return;
  var host = document.currentScript.getAttribute('data-host') || window.location.hostname;
  var container = document.getElementById('fundflow-widget');
  if (!container) return;

  var css = document.createElement('style');
  css.id = 'fundflow-widget-css';
  css.textContent = [
    '#fundflow-float { position:fixed;bottom:24px;right:24px;z-index:99999;font-family:-apple-system,BlinkMacSystemFont,sans-serif }',
    '#fundflow-float button { width:60px;height:60px;border-radius:50%;background:#3b82f6;color:#fff;border:none;font-size:1.4rem;cursor:pointer;box-shadow:0 4px 24px rgba(59,130,246,.5);display:flex;align-items:center;justify-content:center }',
    '#fundflow-float button:hover { transform:scale(1.08);transition:transform .2s }',
    '#fundflow-modal { display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:100000;align-items:center;justify-content:center }',
    '#fundflow-modal.open { display:flex }',
    '#fundflow-modal-inner { background:#111827;border:1px solid #1f2937;border-radius:12px;padding:20px;color:#e5e7eb;max-width:520px;width:90%;max-height:90vh;overflow-y:auto;position:relative }',
    '#fundflow-modal-inner h3 { color:#fff;font-size:1.25rem;margin-bottom:4px }',
    '#fundflow-modal-inner .sub { color:#9ca3af;font-size:.85rem;margin-bottom:16px }',
    '#fundflow-modal-inner .close-modal { position:absolute;top:8px;right:12px;background:none;border:none;color:#9ca3af;font-size:1.3rem;cursor:pointer;z-index:1 }',
    '#fundflow-iframe-wrap { width:100%;overflow:hidden;border-radius:8px }',
    '#fundflow-iframe-wrap iframe { width:100%;min-height:500px;border:0 }',
    '#fundflow-powered { text-align:center;margin-top:12px;font-size:.72rem;color:#4b5563 }'
  ].join('\n');
  document.head.appendChild(css);

  var html = document.createElement('div');
  html.innerHTML = [
    '<div id="fundflow-float"><button id="fundflow-btn" title="Get Business Funding">&dollar;</button></div>',
    '<div id="fundflow-modal">',
      '<div id="fundflow-modal-inner">',
        '<button class="close-modal" id="fundflow-close">&times;</button>',
        '<h3>Get Business Funding</h3>',
        '<p class="sub">$10K to $5M for USA &amp; Canada businesses. No obligation.</p>',
        '<div id="fundflow-iframe-wrap">',
          '<iframe id="fundflow-afn-iframe" src="https://app.advancefundsnetwork.com/partner-embed/c96MALi1wKb0NDa3zIanpRqeAOl1?background=%23ffffff00&padding=20&color=" width="100%" height="500px" style="border:0" scrolling="no"></iframe>',
        '</div>',
        '<div id="fundflow-powered">Powered by XoyaGems</div>',
      '</div>',
    '</div>'
  ].join('');
  document.body.appendChild(html);

  document.getElementById('fundflow-btn').addEventListener('click', function() {
    document.getElementById('fundflow-modal').classList.add('open');
  });
  document.getElementById('fundflow-close').addEventListener('click', function() {
    document.getElementById('fundflow-modal').classList.remove('open');
  });
  document.getElementById('fundflow-modal').addEventListener('click', function(e) {
    if (e.target === this) { this.classList.remove('open'); }
  });

  window.addEventListener('message', function(event) {
    if (event.origin !== "https://app.advancefundsnetwork.com") return;
    if (event.data && event.data.iframeHeight) {
      var iframe = document.getElementById('fundflow-afn-iframe');
      if (iframe) iframe.style.height = event.data.iframeHeight + 'px';
    }
  });
})();
