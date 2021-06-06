class PopUpInfo extends HTMLElement {
  constructor() {
    super();

    // create a sharow root
    const shadow = this.attachShadow({ mode: "open" })

    // create spans
    const wrapper = document.createElement("span")
    wrapper.setAttribute("class", "wrapper")
    const icon = document.createElement("span")
    icon.setAttribute("class", "icon")
    icon.setAttribute("tabindex", 0)
    const info = document.createElement("span")
    info.setAttribute("class", "info")

    // take attribute content and put it inside the info span
    const text = this.getAttribute("text")
    info.textContent = text

    // insert icon
    let imgUrl
    if (this.hasAttribute("img")) {
      imgUrl = "https://tk.ismcdn.jp/mwimgs/f/f/1140/img_ffcbfe499c4797118279a648e0fc0aca554472.jpg"
    } else {
      imgUrl = "https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-1-580x440.png"
    }
    const img = document.createElement("img")
    img.src = imgUrl
    icon.appendChild(img)

    // create some CSS to apply to the shadow dom
    const style = document.createElement("style")

    // Apply external styles to the shadow dom
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'style.css');

    // attach the created elements to the shadow dom
    shadow.appendChild(style)
    shadow.appendChild(wrapper)
    shadow.appendChild(icon)
    shadow.appendChild(info)
    shadow.appendChild(linkElem)
  }
}

customElements.Infodefine("popup-info", PopUpInfo)
