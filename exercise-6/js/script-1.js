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

wrapper.setAttribute('id','wrapper');



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
