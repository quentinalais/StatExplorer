import React from 'react'

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
        <a class="navbar-brand px-5" href="/">
          Bonzai
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Dashboard">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header