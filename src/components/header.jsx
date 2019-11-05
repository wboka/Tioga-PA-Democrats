import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import links from "../menus/navigation.json"

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
    const { siteTitle } = this.props

    return (
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-teal-900">
          <div className="flex items-center flex-shrink-0 mr-6 py-4 px-2">
            <Link
              to="/"
              className="font-semibold text-xl tracking-tight text-white no-underline logo-font"
            >
              {siteTitle}
            </Link>
          </div>
          <div className="block md:hidden">
            <button
              className="flex items-center p-4 text-teal-200 border-purple-400 hover:text-white"
              onClick={this.toggleMenu}
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={
              (this.state.showMenu ? "block" : "hidden") +
              " w-full flex-grow md:flex md:items-center md:w-auto uppercase"
            }
          >
            <div className="text-sm md:flex-grow">
              {links
                ? links.map(link =>
                    link.showInHeader ? (
                      <div
                        key={link.url + link.text}
                        className="block hover:bg-teal-600 text-center md:text-left md:inline-block hover:text-white md:rounded"
                      >
                        {link.isExternalLink ? (
                          <a
                            href={link.url}
                            className="block text-white p-2 no-underline"
                          >
                            {link.text}
                          </a>
                        ) : (
                          <Link
                            to={link.url}
                            className="block text-white p-2 no-underline"
                          >
                            {link.text}
                          </Link>
                        )}
                      </div>
                    ) : null
                  )
                : null}
            </div>
          </div>
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
