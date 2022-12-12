import templateHTMLgen from "./templateHTMLgen.js";

export const headerBar = templateHTMLgen(`
    <header class="headerContainer">
        <div class="headerWrapper">
            <div class="headerLeft">
                <h1 class="logo" id="logoType">Maruru's Web</h1>
            </div>
            <div class="headerRight">
                <nav class="navMenu">
                    <ul class="menuContainer">
                        <li><button class="menuItem home"><a href="#">inicio</a></button></li>
                        <li><button class="menuItem about"><a href="#">sobre</a></button></li>
                        <li><button class="menuItem projects"><a href="#">projetos</a></button></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
`);