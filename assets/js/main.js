$(function () {

    $.ajaxSetup({cache: true});

    /*// Get repositories from the GitHub API.
    if ($('#projects').length) {
        $.getJSON('https://api.github.com/users/jnrbsn/repos?callback=?', function (repos) {
            var i, repoCount = repos.data.length, now = Date.now(),
                projectsActive = document.getElementById('projects-active'),
                projectsOlder = document.getElementById('projects-older'),
                $projects = $('#projects'), $projectsLoading = $('#projects-loading'),
                dt, dd, link, meta;

            if (typeof repos.data.message !== 'undefined') {
                // Handle API errors.
                $projects.html(
                    '<p style="color:#c00;"><strong>GitHub API Error:</strong> ' +
                        repos.data.message + '</p>'
                );
                $projects.slideDown(200);
                $projectsLoading.fadeOut(200);
                $projects.fadeTo(200, 1);
                return;
            }

            // Sort by forks + stargazers, then by date.
            repos.data.sort(function (repoA, repoB) {
                var networkRepoA = repoA.forks_count + repoA.stargazers_count,
                    networkRepoB = repoB.forks_count + repoB.stargazers_count,
                    pushedRepoA = Date.parse(repoA.pushed_at),
                    pushedRepoB = Date.parse(repoB.pushed_at);
                if (networkRepoA === networkRepoB) {
                    return pushedRepoB - pushedRepoA;
                } else {
                    return networkRepoB - networkRepoA;
                }
            });

            for (i = 0; i < repoCount; i++) {
                if (repos.data[i].fork) {
                    continue;
                }

                dt = document.createElement('dt');
                link = document.createElement('a');
                link.innerText = repos.data[i].name;
                link.href = repos.data[i].html_url;
                link.target = '_blank';
                dt.appendChild(link);

                if (repos.data[i].language) {
                    meta = document.createElement('span');
                    meta.className = 'meta';
                    meta.innerText = '(' + repos.data[i].language + ')';
                    dt.appendChild(meta);
                }

                dd = document.createElement('dd');
                dd.innerHTML = Autolinker.link(repos.data[i].description);

                // Repos updated in the last year are considered active.
                if (now - Date.parse(repos.data[i].pushed_at) < 31557600000) {
                    projectsActive.appendChild(dt);
                    projectsActive.appendChild(dd);
                } else {
                    projectsOlder.appendChild(dt);
                    projectsOlder.appendChild(dd);
                }
            }

            $projects.slideDown(200);
            $projectsLoading.fadeOut(200);
            $projects.fadeTo(200, 1);
        });
    }
*/
  
    // Contact Form
  [].slice.call( document.querySelectorAll( '.input' ) ).forEach( function( inputEl ) {
    // in case the input is already filled..
    if( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input--filled' );
  }

  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'input--filled' );
    }
  }
  
    //Classie.js
  
  /*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

  /*jshint browser: true, strict: true, undef: true, unused: true */
  /*global define: false, module: false */

  ( function( window ) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
      hasClass = function( elem, c ) {
        return elem.classList.contains( c );
      };
      addClass = function( elem, c ) {
        elem.classList.add( c );
      };
      removeClass = function( elem, c ) {
        elem.classList.remove( c );
      };
    }
    else {
      hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
      };
      addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
          elem.className = elem.className + ' ' + c;
        }
      };
      removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
      };
    }

    function toggleClass( elem, c ) {
      var fn = hasClass( elem, c ) ? removeClass : addClass;
      fn( elem, c );
    }

    var classie = {
      // full names
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      // short names
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass
    };

    // transport
    if ( typeof define === 'function' && define.amd ) {
      // AMD
      define( classie );
    } else if ( typeof exports === 'object' ) {
      // CommonJS
      module.exports = classie;
    } else {
      // browser global
      window.classie = classie;
    }

  })( window );
  
    // Fix scrolling issue on Mobile Safari.
    if ($(window).width() < 768) {
        $(window).scrollTop(0);
    }

    // Make external links open in a new tab/window.
    (function () {
        var urlRegExp = new RegExp('^(\/|(https?:)?\/\/' + window.location.host + ')');
        $('a').each(function () {
            var $a = $(this);
            if (!urlRegExp.test($a.attr('href'))) {
                $a.attr('target', '_blank');
            }
        });
    })();

});
