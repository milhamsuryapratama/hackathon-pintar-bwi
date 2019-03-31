import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?cs=srgb&dl=beach-blue-sky-carribean-1049298.jpg&fm=jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://images.pexels.com/photos/1192671/pexels-photo-1192671.jpeg?cs=srgb&dl=beach-golden-hour-grass-1192671.jpg&fm=jpg',
    altText: 'Slide 2 dua',
    caption: 'Slide 2 DUA'
  },
  {
    src: 'https://images.pexels.com/photos/219752/pexels-photo-219752.jpeg?cs=srgb&dl=beach-daylight-horizon-219752.jpg&fm=jpg',
    altText: 'Slide 3',
    a: 'https:scontent.fsub1-1.fna.fbcdn.net/v/t1.0-9/48411113_2296773487208847_7865903328956252160_n.jpg?_nc_cat=107&_nc_ht=scontent.fsub1-1.fna&oh=0b102143c6e46fc89858f78289443773&oe=5CC4E101',
    caption: 'Slide 3'
  },
]


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  // constructor() {
  //     super();
  //     this.state = {
  //         message: ''
  //     }
  // }

  // componentWillReceiveProps(nextProps) {
  //     if (nextProps.todos.todos === 'login') {
  //         document.getElementById('keluar').removeAttribute('hidden');
  //         document.getElementById('subscribe').removeAttribute('hidden');
  //         document.getElementById('masuk').setAttribute('hidden', 'true');
  //     } else {
  //         document.getElementById('keluar').setAttribute('hidden', 'true');
  //         document.getElementById('subscribe').setAttribute('hidden', 'true');
  //         document.getElementById('masuk').removeAttribute('hidden');
  //     }
  // }

  // handleMessage = (e) => {
  //     this.setState({
  //         message: e.target.value
  //     })
  // }

  // send = () => {
  //     this.props.sendNotif(this.state.message)
  // }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width='100%' />
          <CarouselCaption captif onText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    // console.log(this.state.message)
    return (
      <Fragment>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand><Link to="/">PUSDIKOM</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/">Beranda</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/profil">Profil</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/kontak">Kontak</Link></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Akun
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink><Link to="/register">Daftar</Link></NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink><Link to="/login">Masuk</Link></NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </Fragment>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         singIn,
//         singOut,
//         subscribe,
//         sendNotif
//     }, dispatch)
// }

// const mapStateToProps = (state) => ({
//     todos: state
// })

export default Home;
// export default connect(mapStateToProps, mapDispatchToProps)(Home);