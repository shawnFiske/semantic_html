var React = require('react');

var SectionOne = React.createClass({
  render: function() {
    
    return (
      <section>
        <article><p>text</p></article>
        <article><p>block</p></article>
        <aside>
          <nav>
            <div><p>button</p></div>
            <div><p>button</p></div>
            <div><p>button</p></div>
          </nav>
        </aside>
      </section>
    )
  }
})

module.exports = SectionOne;
