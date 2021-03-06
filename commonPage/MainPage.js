/**
 * Created by supervons on 2018/12/20.
 * 用户主界面
 * user main page
 */
import React, {Component} from 'react';
import {Container, Header, Content, Footer, FooterTab, Toast, Button, Icon, Text, Card, CardItem, Body} from 'native-base';
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.toPersonalCenter = this.toPersonalCenter.bind(this);
        this.toMainPage = this.toMainPage.bind(this);
        this.toSpinnerShows = this.toSpinnerShows.bind(this);
        this.toNews = this.toNews.bind(this);
        this.toReduxTest = this.toReduxTest.bind(this);
    }

    static navigationOptions = {
        title: '主页面',
        gesturesEnabled: false,
        headerStyle: {                                 //导航栏样式设置
            backgroundColor: '#8bc9ff',
        },
    };

    toMainPage() {
        this.props.navigation.replace('MainPage');
    }

    toPersonalCenter() {
        this.props.navigation.replace('PersonalCenter');
    }

    toSpinnerShows() {
        this.props.navigation.push('SpinnerShows');
    }

    toReduxTest() {
        this.props.navigation.push('ReduxTest');
    }

    toNews() {
        this.props.navigation.replace('News');
    }

    render() {
        return (
            <Container>
                <Content>
                    <Card style={{marginTop: 50}}>
                        <CardItem header>
                            <Text>CommonProject</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                这是一个用于累积功能的轮子项目
                            </Text>
                            <Text>
                                This is a wheel project for cumulative functions
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>GitHub:https://github.com/supervons/commonProject</Text>
                        </CardItem>
                    </Card>
                    <Button block primary onPress={this.toSpinnerShows}><Text> Loading加载动画展示>>> </Text></Button>

                    <Card style={{marginTop: 30}}>
                        <Button block primary onPress={this.toReduxTest}><Text> Redux 示例>>> </Text></Button>
                    </Card>

                </Content>
                <Footer>
                    <FooterTab>
                        <Button vertical active
                                onPress={this.toMainPage}>
                            <Icon name="ios-apps"/>
                            <Text>应用</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera"/>
                            <Text>相机</Text>
                        </Button>
                        <Button vertical
                                onPress={this.toNews}>
                            <Icon name="radio"/>
                            <Text>新闻</Text>
                        </Button>
                        <Button vertical
                                onPress={this.toPersonalCenter}>
                            <Icon name="person"/>
                            <Text>我的</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}