class BufferLink{selector='buffer-link';constructor(){let ths=this;document.addEventListener('mousedown',(e)=>{if(e.target.classList.contains(ths.selector)){this.text=e.target.getAttribute('data-text');ths.copyTextToClipboard()}})}
fallbackCopyTextToClipboard(){let textArea=document.createElement("textarea");let text=this.text;textArea.value=text;textArea.style.top="0";textArea.style.left="0";textArea.style.position="fixed";document.body.appendChild(textArea);textArea.focus();textArea.select();try{let successful=document.execCommand('copy');let msg=successful?'successful':'unsuccessful'}catch(err){}
document.body.removeChild(textArea)}
copyTextToClipboard(){let text=this.text;if(!navigator.clipboard){this.fallbackCopyTextToClipboard(text);return}
navigator.clipboard.writeText(text).then(function(){},function(err){})}}
new BufferLink()