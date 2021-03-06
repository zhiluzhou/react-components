import React,{ Component } from 'react';
import Layout from './../Layout.jsx';
import DP from './DP.jsx';
import { Card, Cards, SubscribeCard } from 'react-components';

export default class CardDemo extends Component {

    constructor(props) {
        super(props);
        this.state = { cards: [
            {
                cover:"/public/images/card/006.jpg",
                title:"男人7种行为等同于说“我爱你”！你看懂了吗？",
                desc:"",
                author:"教你学一点说话技巧"
            },
            {
                cover:"/public/images/card/005.jpg",
                title:"男人7种行为等同于说“我爱你”！你看懂了吗？",
                desc:"",
                author:"教你学一点说话技巧"
            }
            ,
            {
                cover:"/public/images/card/005.jpg",
                title:"男人7种行为等同于说“我爱你”！你看懂了吗？",
                desc:"",
                author:"教你学一点说话技巧"
            }
        ] };
    }

    dianwo = () => {
        this.setState({ cards: [
            {
                cover:"/public/images/card/006.jpg",
                title:"男人7种行为等同于说“我爱你”！你看懂了吗？",
                desc:"",
                author:"教你学一点说话技巧"
            },
            {
                cover:"/public/images/card/005.jpg",
                title:"男人7种行为等同于说“我爱你”！你看懂了吗？",
                desc:"",
                author:"教你学一点说话技巧"
            }
            ,
            {
                cover:"/public/images/card/005.jpg",
                title:"男人7种行为等同于说“我爱你”！你看懂了吗？",
                desc:"",
                author:"教你学一点说话技巧"
            }
        ]  });
    };

    dianta = () => {
        this.setState({ cards: [
            {
                cover:"/public/images/card/002.jpg",
                title:"男人7种行为等同于说“我爱你”！你看懂了吗？",
                desc:"",
                author:"教你学一点说话技巧"
            },
            {
                cover:"/public/images/card/001.jpg",
                title:"男人7种行为等同于说“我爱你”！你看懂了吗？",
                desc:"",
                author:"教你学一点说话技巧"
            }
            ,
            {
                cover:"/public/images/card/005.jpg",
                title:"男人7种行为等同于说“我爱你”！你看懂了吗？",
                desc:"",
                author:"教你学一点说话技巧"
            }
        ]  });
    };

    render() {
        return (
            <Layout title="CardDemo">

                <DP title="-3. Fadein&Fadeout&滑进滑出动画卡片:">
                    <a href="javascript:;" onClick={  this.dianwo  }>点我</a><br/>
                    <a href="javascript:;" onClick={  this.dianta  }>点他</a><br/>
                    <Cards marginLeftRight={ 0.8 } rowCols={3}>
                        {
                            this.state.cards.map((card, index) => {
                                let duration = (this.state.cards.length - index) * 100 + 300;
                                return (
                                    <Card cover={card.cover}
                                          title={card.title}
                                          author={card.author}
                                          animated
                                          transition={[
                                          { property: 'left', duration: `${ duration }ms`, start: "-110%", end: "0%" },
                                          { property: 'opacity', duration: `1000ms`, start: "0", end: "1" },
                                          { property: 'width', duration: `500ms`, start: "0%", end: "30%" }]}
                                    />
                                );
                            })
                        }
                    </Cards>
                </DP>

                <DP title="-2. 滑进滑出动画卡片:">
                    <a href="javascript:;" onClick={  this.dianwo  }>点我</a><br/>
                    <a href="javascript:;" onClick={  this.dianta  }>点他</a><br/>
                    <Cards marginLeftRight={ 0.8 } rowCols={2}>
                        {
                            this.state.cards.map(card => {
                                return (
                                    <Card cover={card.cover}
                                          title={card.title}
                                          author={card.author}
                                          animated
                                          transitionProperty="left"
                                          transitionDuration="500ms"
                                          transitionStart="-100%"
                                          transitionEnd="0%"
                                    />
                                );
                            })
                        }
                    </Cards>
                </DP>

                <DP title="-1. Fadein&Fadeout动画卡片:">
                    <a href="javascript:;" onClick={  this.dianwo  }>点我</a><br/>
                    <a href="javascript:;" onClick={  this.dianta  }>点他</a><br/>
                    <Cards marginLeftRight={ 0.8 } rowCols={2}>
                        {
                            this.state.cards.map(card => {
                                return (
                                    <Card cover={card.cover}
                                          title={card.title}
                                          author={card.author}
                                          animated
                                    />
                                );
                            })
                        }
                    </Cards>
                </DP>

                <DP title="0. 动画卡片:">
                    <Cards marginLeftRight={ 0.8 }>
                        <Card cover="/public/images/card/006.jpg"
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc=""
                              author="教你学一点说话技巧"
                              animated
                              transitionProperty="opacity"
                              transitionDuration="500ms"
                              transitionStart="0"
                              transitionEnd="1"
                        />
                        <Card cover="/public/images/card/005.jpg"
                              onHover={{ 'border': '2px dashed red' }}
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc=""
                              author="教你学一点说话技巧"
                              animated
                              transitionProperty="left"
                              transitionDuration="1000ms"
                              transitionStart="0"
                              transitionEnd="50%"
                        />

                        <SubscribeCard cover="/public/images/card/001.jpg"
                                       author="男人装男人装男人装男人装男人装男人装男人装"
                                       desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                       readNum={1212}
                                       likeNum={98227}
                                       articleNum={2134}
                                          animated
                                          transition={[
                                            { property: 'border', duration: '1000ms', start: "1px solid rgb(255, 255, 255)", end: "8px solid rgb(255, 0, 0)" },
                                            { property: 'width', duration: '1000ms', start: "33%", end: "100%" },
                                            { property: 'left', duration: '1000ms', start: "0", end: "50%" }
                                          ]}
                        />
                    </Cards>
                </DP>

                <DP title="1. 普通卡片:">
                    <Cards marginLeftRight={ 0.8 }>
                        <Card cover="/public/images/card/006.jpg"
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc=""
                              author="教你学一点说话技巧" />
                        <Card cover="/public/images/card/005.jpg"
                              onHover={{ 'border': '2px dashed red' }}
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc=""
                              author="教你学一点说话技巧" />
                        <Card cover="/public/images/card/005.jpg"
                              onClick={() => { alert('be clicked.') }}
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc=""
                              author="教你学一点说话技巧" />

                        <Card cover="/public/images/card/005.jpg"
                              style={{ border: '4px solid darkolivegreen' }}
                              title="男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc=""
                              author="教你学一点说话技巧" />
                    </Cards>
                </DP>

                <DP title="2. 卡片组:">
                    <Cards marginLeftRight={ 0.8 }>
                        <Card cover="/public/images/card/002.jpg" onClick = { this.handleOnClick }
                              title="1男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                              author="教你学一点说话技巧"
                               />
                        <Card cover="/public/images/card/002.jpg"
                              title="2男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                              author="教你学一点说话技巧" />
                        <Card cover="/public/images/card/002.jpg"
                              title="3男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                              author="教你学一点说话技巧"
                              readNum={ 1235 }
                              likeNum={ 9982 }
                              createdDate="2019-09-98"  />
                        <Card cover="/public/images/card/002.jpg"
                              title="4男人7种行为等同于说“我爱你”！你看懂了吗？"
                              desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                              author="教你学一点说话技巧"
                              readNum={ 1235 }
                              likeNum={ 9982 }
                              createdDate="2019-09-98"  />
                    </Cards>
                </DP>
                <DP title="3. 订阅卡片:">
                    <Cards>
                        <SubscribeCard cover="/public/images/card/001.jpg"
                                       author="男人装男人装男人装男人装男人装男人装男人装"
                                       desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                       readNum={1212}
                                       likeNum={98227}
                                       articleNum={2134}
                                       onClick={ () => { alert('be clicked.'); } } >
                            <a href="javascript:;" onClick={ () => { alert('订阅'); } }><span>订阅</span></a>
                        </SubscribeCard>
                        <SubscribeCard cover="/public/images/card/001.jpg"
                                       author="男人装男人装男人装男人装男人装男人装男人装"
                                       desc="阅读本文前，请您先点击本文上面的蓝色字体“教你学一点说话技巧”再点击“关注”，这样您就可以继续免费收到文章了"
                                       readNum={1212}
                                       likeNum={98227}
                                       articleNum={2134}
                                       onClick={ () => { alert('be clicked.'); } } >

                            <a href="javascript:;" onClick={ () => { alert('取消订阅'); } } style={{ color:'#808080',border:'1px solid #808080' }}><span>取消订阅</span></a>
                        </SubscribeCard>
                    </Cards>
                </DP>
            </Layout>
        );
    }
}