---
layout: post
title:  "ㄹ / 그럼후배님이름도뺄게요"
description: "플레이어가 컨트롤하는 모니터 중앙 원에 불빛이 닿으면, 원이 커지며 일정 수치이상 커지면 글자를 출력하는 간단한 게임. 정말 후배들 이름을 빼야 할 것 같다. "
date:   2016-12-06
img: hubanameout.jpg
p5code: hubanameout
color: 555555
author: "그럼후배님이름도뺄게요"
permalink: /hubanameout/
width: medium
---
## 팀 이름 / 작가 이름
- 김성민 (디아15)
- 이정혁 (디아16)
- 김호용 (디아16)


## 작품에 대하여
플레이어가 컨트롤하는 모니터 중앙 원에 불빛이 닿으면, 원이 커지며 일정 수치이상 커지면 글자를 출력하는 간단한 게임.
Nature Of Code를 쓰신 Daniel Shiffman 선생님의 아가리오 만들기 유튜브 강좌를 참조하여 만들었다.
광화문의 촛불집회를 보며 영감을 얻었다. 작은 불들이 모여 쉽게 꺼지지 않을 큰 불이 된다.



- [저널링 링크](https://docs.google.com/document/d/1HGXUzXbIX0GhdvICquUzip-Pv4Qnx6iZ_jKAaiaUIvM/edit)


## Code
{% highlight javascript %}

for (var i=0; i<lights.length; i++){
  // blobs[i] = new Blob(random(width),random(height),random(5,15));
  lights[i].show();
  lights[i].move();
  if (light.join(lights[i])){
    lights.splice(i,1);
  }
}
_________________________________________________
this.join = function(other){
  var d = p5.Vector.dist(this.pos,other.pos);
  if(d< this.m + other.m){
    this.m += other.m*0.15;
    return true;
  }else{
    // return false;
  }
}
{% endhighlight %}



## 실행하기
- 마우스를 움직여 큰 불을 만들어 보세요!
