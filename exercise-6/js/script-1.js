const body = document.querySelector('body');
const wrapper = document.createElement('div');
const cardItem = document.createElement("div");
const blockImg = document.createElement("div");
const img = document.createElement("img");
const blockInfo = document.createElement("div");
const title = document.createElement("h4");
const descr = document.createElement("h5");
const data = document.createElement("div");
const left = document.createElement("div");
const leftImg = document.createElement("img");
const leftDescr = document.createElement("p");
const right = document.createElement("div");
const rightImg = document.createElement("img");
const rightDescr = document.createElement("p");
const author = document.createElement("div");
const avatar = document.createElement("img");
const aDescr = document.createElement("p");
const aDescr2 = document.createElement("p");

wrapper.setAttribute('id','wrapper');
img.src = 'images/image-equilibrium.jpg';
leftImg.src = 'images/icon-ethereum.svg';
rightImg.src = 'images/icon-clock.svg';
title.innerText = 'Equilibrium #3429';
descr.innerText = `Our Equilibrium collection promotes
balance and calm.`;
leftDescr.innerText = '0.041 ETH';
rightDescr.innerText = '3 days left';
avatar.src = 'images/image-avatar.png';
aDescr.innerText = 'Creation of ';
aDescr2.innerText = 'Jules Wyvern';

body.style.cssText = `
    background: #0D192B;
    margin: 0;
    padding: 0;
`;

wrapper.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
`

cardItem.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 50px;
    padding: 20px 0;
    width: 350px;
    height: 600px;
    background: #14253D;
    box-shadow: -20px 20px 4px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
`;

img.style.cssText = `
    width: 302px;
    height: 302px;
    border-radius: 10px;
`;

blockInfo.style.cssText =`
    width: 302px;
    margin: 0 auto;
    padding:25px 0;
    border-bottom:1px solid #2F415B;
`;

title.style.cssText = `
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    margin: 0;
    padding:0;
    color: #FFFFFF;
`
descr.style.cssText = `
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #8BACDA;
    margin: 16px 0 24px 0;
    padding:0;
`;

data.style.cssText = `
    display:flex;
    justify-content: space-between;
    align-items:center;
`;

left.style.cssText = `
    display:flex;
    align-items:center;
`;
right.style.cssText = `
    display:flex;
    align-items:center;
`;

leftDescr.style.cssText = `
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #00FFF6;
    display: inline-block;
    margin-left: 5px;
`;
rightDescr.style.cssText = `
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #8BACD9;
    display: inline-block;
    margin-left: 5px;
`;

author.style.cssText = `
    width:302px;
    display:flex;
    align-items:center;
    margin:10px 0 0;
`;
avatar.style.cssText = `
    width: 34px;
    height: 34px;
    border: 1px solid #FFFFFF;
    border-radius:50%;
    margin:0px 15px 0 0;

`;
aDescr.style.cssText = `
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    margin:0px 15px 0 0;
`;
aDescr2.style.cssText = `
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
`;

body.appendChild(wrapper);
wrapper.appendChild(cardItem);
cardItem.appendChild(blockImg);
blockImg.appendChild(img);
cardItem.appendChild(blockInfo);
blockInfo.appendChild(title);
blockInfo.appendChild(descr);
blockInfo.appendChild(data);
data.appendChild(left);
left.appendChild(leftImg)
left.appendChild(leftDescr)
data.appendChild(right);
right.appendChild(rightImg)
right.appendChild(rightDescr)
cardItem.appendChild(author);
author.appendChild(avatar);
author.appendChild(aDescr);
author.appendChild(aDescr2);