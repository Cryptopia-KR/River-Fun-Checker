/* River Fun Checker v1.0.0 - Licensed Code */
function a(e){var t=document.getElementById("river-popup");t&&t.remove();let a="https://unavatar.io/twitter/"+e.twitterUsername,n=`https://app.river.inc/_next/image?url=${encodeURIComponent(a)}&w=128&q=75&dpl=dpl_Gm162MJm5U3qyT2cVX1TQXA52kRN`,d=`https://app.river.inc/_next/image?url=${encodeURIComponent(a)}&w=64&q=75&dpl=dpl_Gm162MJm5U3qyT2cVX1TQXA52kRN`,i=(t=`https://app.river.inc/_next/image?url=${encodeURIComponent(a)}&w=32&q=75&dpl=dpl_Gm162MJm5U3qyT2cVX1TQXA52kRN`,document.createElement("div"));if(i.id="river-popup",i.innerHTML=`
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            width: 360px;
            background: linear-gradient(135deg, #0a1128 0%, #001f54 100%);
            color: white;
            padding: 25px;
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.4);
            z-index: 10000;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        ">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="margin: 0; color: #fff; font-size: 18px; display: flex; align-items: center; gap: 8px;">
                    🌊 River Fun Checker
                </h3>
                <button id="river-close" style="
                    background: rgba(255,255,255,0.15);
                    border: none;
                    color: white;
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 20px;
                    line-height: 1;
                    transition: all 0.2s;
                " onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'">×</button>
            </div>
            
            <div style="display: flex; align-items: center; margin-bottom: 20px; background: rgba(255, 255, 255, 0.08); padding: 15px; border-radius: 12px;">
                <div style="position: relative; margin-right: 12px;">
                  <img id="river-popup-avatar" src="${t}" style="
                      width: 60px;
                      height: 60px;
                      border-radius: 50%;
                      border: 3px solid rgba(255,255,255,0.2);
                      display: block;
                  " alt="Profile">
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div style="font-weight: bold; font-size: 16px; margin-bottom: 3px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${e.twitterName||""}</div>
                    <div style="color: #aaa; font-size: 13px; margin-bottom: 5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">@${e.twitterUsername}</div>
                    <div style="
                        background: rgba(255, 255, 255, 0.08);
                        color: #fff;
                        padding: 4px 12px;
                        border-radius: 12px;
                        font-size: 11px;
                        font-weight: bold;
                        display: inline-block;
                    ">Tier ${e.tier}</div>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px;">
                <div style="background: rgba(255, 255, 255, 0.08); padding: 12px; border-radius: 10px;">
                    <div style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Reward Rank</div>
                    <div style="font-weight: bold; font-size: 18px;">#${e.rewardRank?.toLocaleString()||"N/A"}</div>
                </div>
                <div style="background: rgba(255, 255, 255, 0.08); padding: 12px; border-radius: 10px;">
                    <div style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Total Reward</div>
                    <div style="font-weight: bold; font-size: 18px;">${Math.floor(e.totalReward)?.toLocaleString()||"0"}</div>
                </div>
                <div style="background: rgba(255, 255, 255, 0.08); padding: 12px; border-radius: 10px;">
                    <div style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Daily Earned</div>
                    <div style="font-weight: bold; font-size: 18px; color: #4ade80;">${Math.floor(e.totalRewardDiff)?.toLocaleString()||"0"}</div>
                </div>
                <div style="background: rgba(255, 255, 255, 0.08); padding: 12px; border-radius: 10px;">
                    <div style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Daily Reward</div>
                    <div style="font-weight: bold; font-size: 18px;">${Math.floor(e.dailyReward)?.toLocaleString()||"0"}</div>
                </div>
                <div style="background: rgba(255, 255, 255, 0.08); padding: 12px; border-radius: 10px;">
                    <div style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Score Rank</div>
                    <div style="font-weight: bold; font-size: 18px;">#${e.scoreRank?.toLocaleString()||"N/A"}</div>
                </div>
                <div style="background: rgba(255, 255, 255, 0.08); padding: 12px; border-radius: 10px;">
                    <div style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Score</div>
                    <div style="font-weight: bold; font-size: 18px;">${e.score?.toFixed(2)||"0"}</div>
                </div>
                <div style="background: rgba(255, 255, 255, 0.08); padding: 12px; border-radius: 10px;">
                    <div style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Mind Share</div>
                    <div style="font-weight: bold; font-size: 18px;">${e.mindShare?.toFixed(3)||"0.000"}</div>
                </div>
                <div style="background: rgba(255, 255, 255, 0.08); padding: 12px; border-radius: 10px;">
                    <div style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px;">Airdrop Amount</div>
                    <div style="font-weight: bold; font-size: 18px;">${Math.floor(e.airdropAmount)?.toLocaleString()||"0"}</div>
                </div>
            </div>
        </div>
    `,document.body.appendChild(i),t=document.getElementById("river-popup-avatar")){let i=!1,o=!1,r=!1;t.onload=function(){var e=this.naturalWidth,t=this.naturalHeight;i||e<64||t<64||e!==t?i||64<=e&&64<=t&&e===t?i&&!o&&e!==t?(o=!0,this.src=n):!o||r||10<e&&10<t&&e===t||(r=!0,this.src=a):(i=!0,this.src=d):i=!0},t.onerror=function(){i?o?r||(r=!0,this.src=a):(o=!0,this.src=n):(i=!0,this.src=d)}}document.getElementById("river-close").addEventListener("click",()=>{i.remove()}),setTimeout(()=>{i.parentNode&&i.remove()},1e4)}function i(){var e;if(!document.getElementById("river-score-container"))if(e=window.location.href.match(/(?:twitter\.com|x\.com)\/([^\/\?]+)/)){if(e=e[1],!["home","explore","notifications","messages","i","compose","search"].includes(e)){console.log("River: Fetching data for username:",e);let r=document.querySelector('[data-testid="UserName"]');r?t.getUserAccount(e).then(t=>{var i,o;if(!document.getElementById("river-check-btn")){o=Math.floor(t.totalRewardDiff||0),(i=document.createElement("div")).id="river-score-container",i.style.cssText=`
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        margin-left: 4px;
        vertical-align: middle;
      `;let e=document.createElement("div");e.id="river-check-btn",e.style.cssText=`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        background: linear-gradient(135deg, #0a1128 0%, #001f54 100%);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0 8px;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 600;
        height: 24px;
        transition: all 0.2s;
        box-shadow: 0 2px 8px rgba(0, 31, 84, 0.3);
      `,e.innerHTML=`
        <div style="display: flex; align-items: center; gap: 3px;">
          <div style="font-size: 11px;">🌊</div>
          <div style="color: #ffffff; font-size: 12px;">River</div>
        </div>
        <div style="display: flex; align-items: center; gap: 2px;">
          <div style="font-size: 10px;">✓</div>
          <div style="color: #4ade80; font-weight: 700; font-size: 12px;">${o.toLocaleString()}</div>
        </div>
      `,i.appendChild(e),e.addEventListener("mouseenter",()=>{e.style.background="linear-gradient(135deg, #001f54 0%, #0a1128 100%)",e.style.boxShadow="0 4px 12px rgba(0, 31, 84, 0.5)"}),e.addEventListener("mouseleave",()=>{e.style.background="linear-gradient(135deg, #0a1128 0%, #001f54 100%)",e.style.boxShadow="0 2px 8px rgba(0, 31, 84, 0.3)"}),e.addEventListener("click",async e=>{e.preventDefault(),e.stopPropagation(),a(t)}),(o=r.querySelector("#yaps-score-container"))&&o.parentElement?(o.parentElement.insertBefore(i,o.nextSibling),console.log("River: Button added after Kaito!")):(o=r.querySelector('[dir="ltr"]'))&&o.parentElement?(o.parentElement.insertBefore(i,o.nextSibling),console.log("River: Button added successfully!")):console.log("River: Could not find insertion point")}}).catch(e=>{console.log("River data not available for this user")}):console.log("River: UserName div not found, will retry")}}else console.log("River: Not a profile page")}let t={baseUrl:"https://api-v2.satoshiprotocol.org",async getUserAccount(e){try{var t=(new Date).getTime(),i=await fetch(this.baseUrl+`/twitter/account?twitterUsername=${e}&_t=`+t,{cache:"no-cache",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}});if(i.ok)return(await i.json()).data;throw Error("HTTP error! status: "+i.status)}catch(e){throw console.error("Error fetching user account:",e),"Failed to fetch"===e.message&&console.error("Network error - check internet connection or API availability"),e}}},o="",e=()=>{var e=window.location.href,t=(e!==o&&((t=document.getElementById("river-score-container"))&&t.remove(),o=e),e.match(/(?:twitter\.com|x\.com)\/([^\/\?]+)/));t&&(e=t[1],["home","explore","notifications","messages","i","compose","search"].includes(e)||i())};window.addEventListener("load",()=>{setTimeout(e,1e3)}),setInterval(e,1e3);