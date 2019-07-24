import { Menu, Icon } from 'antd'
import Link from 'umi/link'

function Header({ location }){
  return(
    <Menu
      selectedKeys = {[location.pathname]}
      mode = "horizontal"
      theme = "dark"
    >
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="home"/>
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="/myapp">
        <Link to="/myapp">
          <Icon type="bars"/>
          Myapp
        </Link>
      </Menu.Item>
      <Menu.Item key="/umi">
        <a href="https://github.com/umijs/umi" target="_blank" rel="noopener noreferrer">umi</a>
      </Menu.Item>
      <Menu.Item key="/dva">
        <a href="https://github.com/dvajs/dva" target="_blank" rel="noopener noreferrer">dva</a>
      </Menu.Item>
    </Menu>
  )
}

export default Header