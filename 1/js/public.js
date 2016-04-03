/**
 * Created by wangjunwu on 2015/11/13.
 */

document.addEventListener('DOMContentLoaded', function()
{

    document.body.style.height=document.documentElement.clientHeight+'px'; //页面高度

    var oMask=document.getElementById('mask');
    var oClose=document.querySelector('.close');
    var aPopup=document.querySelectorAll('.popup');
    function maskShow()
    {
        oMask.style.display='block';
        oMask.className='mask';
    }
    oClose.addEventListener('touchstart', function()
    {
        oMask.style.display='none';
        oMask.className='';
        for(var i=0;i<aPopup.length;i++)
        {
            aPopup[i].style.display='none';
        }
    }, false);

    /*禁止滚动*/
    oMask.addEventListener('touchmove', function(e)
    {
        e.preventDefault();
    }, false);
    var popup=document.querySelectorAll('.popup');
    for(var i=0;i<popup.length;i++)
    {
        popup[i].addEventListener('touchmove', function(e)
        {
            e.preventDefault();
        }, false);
    }




    /*转盘*/
    var lottery=function()
    {
        var oWinning=document.getElementById('winning');
        var oLottery=document.getElementById('lottery');
        var oWinnText=document.getElementById('winnText');
        var oNotLottery=document.getElementById('notLottery');
        var oPrize=document.getElementById('prize');
        var oStart=oLottery.querySelector('.lottery-start');
        var oDial=oLottery.querySelector('.dial');
        var item=null;

        function lotteryFn(angle,prize)
        {
            var b=angle+1080;
            oDial.style.WebkitTransform='rotate(-'+b+'deg)';
            oWinnText.innerHTML=prize;
        }

        oStart.addEventListener('touchstart', function()
        {
            item=1; /*奖项  1-8*/

            /*奖品*/
            switch (item)
            {
                case 1:
                    lotteryFn(0, 'iphone6s(16G太空灰)');
                    oPrize.className='iphone';
                    break;
                case 2:
                    lotteryFn(45, 'iPad air');
                    oPrize.className='ipad';
                    break;
                case 3:
                    lotteryFn(90, '京东E卡（300面值）');
                    oPrize.className='jd';
                    break;
                case 4:
                    lotteryFn(135, 'Q币充值卡（50元）');
                    oPrize.className='qq';
                    break;
                case 5:
                    lotteryFn(180, '移动充值卡（100元）');
                    oPrize.className='move';
                    break;
                case 6:
                    lotteryFn(225, 'Q币充值卡（10元）');
                    oPrize.className='qq';
                    break;
                case 7:
                    lotteryFn(270, '优能1对1寒假标准课优惠');
                    oPrize.className='discount';
                    break;
                case 8:
                    lotteryFn(315, '');
            }
        }, false);

        /*转盘停止*/
        oDial.addEventListener('webkitTransitionEnd',ainEnd, false);
        oDial.addEventListener('transitionend', ainEnd, false);
        function ainEnd()
        {
            setTimeout(function()
            {
                if(item!=8)
                {
                    oWinning.style.display='block';
                }
                else
                {
                    oNotLottery.style.display='block';
                }
                oMask.style.display='block';
                oMask.classList.add('mask2');
            }, 500);
        }
    }();

    /*填写信息*/
    (function()
    {
        var oInfoBox=document.getElementById('infoBox');
        var aP=oInfoBox.getElementsByTagName('p');
        var aInput=oInfoBox.getElementsByTagName('input');

        for(var i=0;i<aInput.length;i++)
        {
            (function(index)
            {
                aInput[i].addEventListener('focus', function()
                {
                    aP[index].className='active';
                }, false);
                aInput[i].addEventListener('blur', function()
                {
                    aP[index].className='';
                }, false);
            })(i);
        }
    })();

    (function()
    {
        var oEaiseExplain=document.getElementById('eaiseExplain');
        var oEaiseIntr=document.getElementById('eaiseIntr');
        var oExplain=document.getElementById('explain');

        oEaiseExplain.addEventListener('touchstart', function() //标课说明
        {
            oExplain.style.display='block';
            maskShow();
        }, false);

        oEaiseIntr.addEventListener('touchstart', function()  //筹课说明
        {
            oExplain.style.display='block';
            maskShow();
        }, false)
    })();

    (function()
    {
         var geyser=document.querySelectorAll('.geyserHover');

        for(var i=0;i<geyser.length;i++)
        {
            geyser[i].addEventListener('webkitTransitionEnd',geyserEnd, false);
            geyser[i].addEventListener('transitionend', geyserEnd, false);

            function geyserEnd()
            {
                alert(1)
            }
        }
    })();

    /*无缝滚动*/
    (function()
    {

        scroll('rollList1');
        scroll('rollList2');
        function scroll(id)
        {
            var aRollList=document.getElementById(id);
            var head=document.querySelector('head');
            if(aRollList.children.length>4)
            {
                aRollList.innerHTML+=aRollList.innerHTML;

                var h=aRollList.offsetHeight;
                var style=document.createElement('style');
                style.innerHTML='@-webkit-keyframes scrollText1 {'
                    + '0%{-webkit-transform: translateY(0px);}'
                    + '100%{-webkit-transform: translateY(-'+h/2+'px);}'
                    + '}';
                head.appendChild(style);

                aRollList.setAttribute('style', '-webkit-animation:scrollText1 '+h/30+'s infinite linear;');
            }
        }
    })();

}, false);






















