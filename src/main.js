$ = jQuery = require('jquery'); //defines jQuery globally
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

// workaround for using "use strict" by using an ify
(function (win) {
    "use strict";
    var App = React.createClass({
        render: function () {
            var Child;

            switch (this.props.route) {
                case 'about': Child = About; break;
                default: Child = Home;
            }

            return (
                <div>
                    <Child />
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }

    React.render(<Home />, document.getElementById('app'));

    win.addEventListener('hashchange', render);
    render();
})(window);

