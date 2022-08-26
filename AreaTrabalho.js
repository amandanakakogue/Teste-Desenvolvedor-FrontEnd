import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  import 'antd/dist/antd.css';
  import './Area.css';
  import logo from './usuaria.jpg';
  import { Table, Tag, Space } from 'antd';
  import { Modal, Button, Select, Checkbox, Tabs, DatePicker } from 'antd';
  import { Divider } from 'antd';
  import { Calendar } from 'antd';
  

  

  const dataSource = [
    {
      key: '1',
      
      nome_paciente: 'Ricardo dos Santos',
      horario_consulta: '14:30 hs',
      cpf: '123.630.566-00',
      numero_telefone: '(48) 98426-6322',
      pagamento: 'Particular',
      convenio: '',
    },
    {
      key: '2',
      
      nome_paciente: 'Janaína Mourão',
      horario_consulta: '15:00 hs',
      cpf: '006.321.960-25',
      numero_telefone: '(48) 94656-6630',
      pagamento: 'Convênio',
      convenio: 'Unimed',
    },
  ];
  
  const columns = [
    
    {
      title: 'Paciente',
      dataIndex: 'nome_paciente',
      key: 'nome_paciente',
      
    },
    {
      title: 'Horário Consulta',
      dataIndex: 'horario_consulta',
      key: 'horario_consulta',
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
    },
    {
      title: 'Telefone',
      dataIndex: 'numero_telefone',
      key: 'numero_telefone',
    },
    {
      title: 'Pagamento',
      dataIndex: 'pagamento',
      key: 'pagamento',
    },
    {
      title: 'Convênio',
      dataIndex: 'convenio',
      key: 'convenio',
    },
    
  ];

  const dataSourceAv = [
    {
      key: '1',
      checkbox: <Checkbox onChange={onChange2}></Checkbox>,
      aviso: 'Encaminhar pedido de exame para Laboratório Santa Luzia.',
    },
    {
      key: '2',
      checkbox: <Checkbox onChange={onChange2}></Checkbox>,
      aviso: 'Ligar para agendar retorno de Jonas Torres.',
    },
  ];
  
  const columnsAv = [
    
    {
      title: 'Aviso',
      dataIndex: 'aviso',
      key: 'aviso',
      
    },
  ];

  const { Header, Content, Footer, Sider } = Layout;
  
  const { Option } = Select;

  function onChange2(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  

  function getItem(label, key, icon, children,path) {
    return {
      key,
      icon, 
      children,
      label,
      path,
    };
  }
  
  

  const items = [
    
    getItem('Agendamentos', 'sub2', <TeamOutlined />, [getItem('Agendar Consulta', '2','','','/AgendaConsulta'), getItem('Pesquisar Consultas', '3')]),
    
  ];
  
  const App = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };

    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
         <div className="logo" />
          <img src={logo} width="50" className="App-logo" alt="logo" /> 
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>Usuário</Breadcrumb.Item>
              <Breadcrumb.Item>Amanda</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <table width="100%">
                <tr>
                
                <th align="left">Agendamentos do dia</th>
                
              </tr>
              <tr heigth="10" ><th colspan="3"><Divider /></th></tr>
              <tr>
                <th colspan="2">
                    
                   
                    
                    </th>
              </tr>
              </table>    
              <Table pagination={false} dataSource={dataSource} columns={columns} />
            </div>
            
          </Content>
          <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
                margin:'0 16px'
                
              }}
            >    
                <table width="100%" >
                    <tr>
                        <th align="left" width='30%'>
                            <div className="site-calendar-demo-card">
                                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                            </div>
                        </th>
                        <td align="left">
                            <table width="70%" margin='0 20px'>
                                <tr>
                                    <th align="left">Avisos e Lembretes</th>
                                </tr>
                                <tr heigth="10" >
                                    <th colspan="3"><Divider />
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                    <Table pagination={false} dataSource={dataSourceAv} columns={columnsAv} />
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    
                </table> 
                

                
            </div>   
          
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
           
          </Footer>
        </Layout>
      </Layout>
    );
  };
  
  export default App;