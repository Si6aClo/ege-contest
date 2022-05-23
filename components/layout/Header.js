import Link from 'next/link';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link href='/' passHref>
                    <Navbar.Brand>
                        ЕГЭ-контест
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/" passHref>
                            <Nav.Link >Главная</Nav.Link>
                        </Link>
                        <Link href='/contests' passHref>
                            <Nav.Link>Контесты</Nav.Link>
                        </Link>
                        <NavDropdown title="Аккаунт" id="collasible-nav-dropdown">
                            <Link href='/profile' passHref>
                                <NavDropdown.Item>Профиль</NavDropdown.Item>
                            </Link>
                            <Link href='/groups' passHref>
                                <NavDropdown.Item>Группы</NavDropdown.Item>
                            </Link>
                            <Link href='/favourites' passHref>
                                <NavDropdown.Item>Избранное</NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <Link href='/dashboard' passHref>
                                <NavDropdown.Item>Меню администратора</NavDropdown.Item>
                            </Link>

                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link href='/support' passHref>
                            <Nav.Link>Поддержка</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;