import React, { Component, Image } from 'react';
import { Menu, Icon, Switch, Layout, Button } from 'antd';
import Login from './Auth';

import AreaTrabalho from '../container/AreaTrabalho.js';

import { Link, BrowserRouter } from 'react-router-dom'

import Routes from '../container/Router';


const { SubMenu } = Menu;

class MenuInicial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'dark',
      current: '1',
      // links: undefined
    }
    this.changeTheme = this.changeTheme.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.logout = this.logout.bind(this)
    this.Carregalogin = this.Carregalogin.bind(this)
  }

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
            <div>

              <button><img src={mainLogo} alt="my image" onClick={this.logout} height="20" /></button>

              <div>

                <br />
                <br />
              
                <Menu
                  theme={this.state.theme}
                  onClick={this.handleClick}
                  style={{ width: 256 }}
                  defaultOpenKeys={['sub1']}
                  selectedKeys={[this.state.current]}
                  mode="inline"
                >
                  <SubMenu
                      key={index}
                      title={
                        <span>
                          <Icon type="appstore" />
                          <span>{key}</span>
                        </span>
                      }
                    >
                     
                            <Menu.Item>
                              <Link key={index} to={link.rota}>{link.nome_tela}</Link>
                            </Menu.Item>
                      

                    </SubMenu>
                    

                </Menu>
                {/*==============================================================================*/}
              </div>
              <Routes />
            </div>
          </BrowserRouter>

       

      </div>
    );
  }
}

export default MenuInicial;


