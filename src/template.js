/* globals module, require */

var mustache = require('mustache');
var template = '<div ng-init="tracklistShown=false;audioLength={{ audio_length }};sectionStartTimes=[]">\
\
    	<!-- Toggler -->\
        <div class="tracklist-toggle-container">\
            <svg version="1.1" class="tracklist-toggle-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="160px" height="26px" viewBox="0 0 160 26" enable-background="new 0 0 160 26" xml:space="preserve">\
                <switch>\
                    <g>\
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M160,26c0,0-5-2.135-5-5.043C155,14.744,155,5,155,5c0-2.761-2.238-5-5-5H10C7.239,0,5,2.239,5,5c0,0,0,9.803,0,16.014C5,23.893,0,26,0,26H160z"></path>\
                    </g>\
                    <foreignObject width="0" height="0" overflow="hidden">\
                        <div class="tracklist-toggle-fallback"></div>\
                    </foreignObject>\
                </switch>\
            </svg>\
            <div class="tracklist-toggle-text" m-click="tracklistShown=!tracklistShown"><span ng-show="tracklistShown" class="tracklist-toggle-arrow arrow-show ng-hide"><span class="tracklist-toggle-text-content">Hide </span></span><span ng-show="!tracklistShown" class="tracklist-toggle-arrow"><span class="tracklist-toggle-text-content">Show </span></span><span class="tracklist-toggle-text-content">Tracklist</span></div>\
        </div>\
\
        <!-- Tracklist -->\
        <div class="cloudcast-tracklist" ng-class="{\"open\":tracklistShown}">\
\
          {{ #sections }}\
        	<!-- Tracklist item -->\
            <div class="track-row cf" ng-hide="juno.sections.length">\
                <div class="container">\
                    <div class="track-name" title="{{ title }}"><span class="track-number">{{ track_number }}.</span><a class="track-song-name-link" href="{{ track_url }}">{{ title }}</a></div>\
                    <div class="track-by"><span class="track-by-name">by</span><a class="artist-name-link" href="{{ artist_url }}"><strong>{{ artist }}</strong></a></div>\
                </div>\
            </div>\
            <!-- ngRepeat: section in juno.sections -->\
            {{ /sections }}\
        </div>\
</div>';

module.exports = function render(data) {
     return mustache.render(template, data);
}
