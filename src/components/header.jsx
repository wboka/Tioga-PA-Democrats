import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import links from "../../data/menus.json"
import { FaFacebook, FaEnvelope, FaPhone, FaBars } from "react-icons/fa"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }))
  }

  render() {
    return (
      <header>
        <nav className="shadow-inner">
          <div className="flex flex-wrap bg-democrat-blue-700 text-white">
            <ul className="w-full sm:w-1/2 text-center sm:text-left">
              <li className="block sm:inline-block p-2 hover:bg-white hover:text-democrat-blue-700">
                <a className="p-2 rounded" href="tel:+15701234567">
                  <FaPhone className="inline" /> Call Us
                </a>
              </li>
              <li className="block sm:inline-block p-2 hover:bg-white hover:text-democrat-blue-700">
                <a className="p-2 rounded" href="mailto:tiogadems@gmail.com">
                  <FaEnvelope className="inline" /> Email Us
                </a>
              </li>
            </ul>
            <ul className="w-full sm:w-1/2 text-center sm:text-right">
              <li className="block sm:inline-block p-2 hover:bg-white hover:text-democrat-blue-700			">
                <a
                  className="p-2 rounded"
                  href="https://www.facebook.com/Tiogadems"
                >
                  <FaFacebook className="inline" /> Like Us on Facebook
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="flex flex-wrap p-2 sm:max-w-4xl mx-auto">
					<div className="w-full sm:w-1/4">
						<img
							className="mx-auto"
							src="/images/logo.png"
							alt="Official Democrats Logo"
						/>
					</div>
					<div className="w-full sm:w-3/4">
						<h1 className="text-center text-democrat-blue-700">
							<p>
								Tioga County, Pa
							</p>
							<p>Democrats</p>
						</h1>
					</div>
				</div>

        <nav className="sticky top-0 bg-democrat-blue-700 text-white">
          <div className="block sm:hidden">
            <button
              class="px-4 py-2 w-full text-center sm:mt-0"
              onClick={this.toggleMenu}
            >
              <FaBars className="inline" /> Menu
            </button>
          </div>
          <ul
            className={
              (this.state.showMenu ? "block" : "hidden") +
              " sm:p-2 w-full text-center sm:text-left sm:block"
            }
          >
            {links
              ? links.map(link =>
                  link.showInHeader ? (
                    <li
                      key={link.url + link.text}
                      className="block hover:bg-white text-center sm:text-left sm:inline-block hover:text-democrat-blue-700 sm:rounded"
                    >
                      {link.isExternalLink ? (
                        <a href={link.url} className="block p-2 no-underline">
                          {link.text}
                        </a>
                      ) : (
                        <Link to={link.url} className="block p-2 no-underline">
                          {link.text}
                        </Link>
                      )}
                    </li>
                  ) : null
                )
              : null}
          </ul>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
