<div ng-controller="storyCtl">
 <h3 ng-bind-html-unsafe="story.title"></h3>
 <img ng-src="{{story.primary_image.small.image}}"/>
 <a href="javascript: void(0)" ng-click="queue(story)">Listen/Queue</a>
 <p ng-bind-html-unsafe="story.body"> </p>
</div>