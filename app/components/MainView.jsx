var React = require('react');
var Header = require('./Header.jsx');
var SectionOne = require('./SectionOne.jsx');
var SectionTwo = require('./SectionTwo.jsx');
var SectionThree = require('./SectionThree.jsx');
var SectionFour = require('./SectionFour.jsx');
var Footer = require('./Footer.jsx');

var MainView = React.createClass({
  render: function() {
    
    return (
      <main>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
      </main>
    )
  }
})

module.exports = MainView;