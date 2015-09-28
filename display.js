/**
 * Created by Cathryn on 2015-09-26.
 */
$(document).ready(events);


var aboutTabClass = ".aboutMe-tab";
var projectsTabClass = ".projects-tab";
var resumeTabClass = ".resume-tab";
var contactTabClass = ".contactMe-tab";

var aboutID = "#aboutMe";
var projectsID = "#projects";
var resumeID = "#resume";
var contactID = "#contactMe";

var activeMenu = "js-activemenu";


var onClickAboutMe = function() {
    console.log('about');
    activeMenuToggleOn(aboutTabClass, activeMenu);
    activeMenuToggleOff(projectsTabClass, activeMenu);
    activeMenuToggleOff(resumeTabClass, activeMenu);
    activeMenuToggleOff(contactTabClass, activeMenu);
    $(aboutID).show();
    $(projectsID).hide();
    $(resumeID).hide();
    $(contactID).hide();

};

var onClickProjects = function() {
    console.log('projects');
    activeMenuToggleOff(aboutTabClass, activeMenu);
    activeMenuToggleOn(projectsTabClass, activeMenu);
    activeMenuToggleOff(resumeTabClass, activeMenu);
    activeMenuToggleOff(contactTabClass, activeMenu);
    $(aboutID).hide();
    $(projectsID).show();
    $(resumeID).hide();
    $(contactID).hide();

};

var onClickResume = function() {
    console.log('resume');
    activeMenuToggleOff(aboutTabClass, activeMenu);
    activeMenuToggleOff(projectsTabClass, activeMenu);
    activeMenuToggleOn(resumeTabClass, activeMenu);
    activeMenuToggleOff(contactTabClass, activeMenu);
    $(aboutID).hide();
    $(projectsID).hide();
    $(resumeID).show();
    $(contactID).hide();

};

var onClickContactMe = function() {
    console.log('contact');
    activeMenuToggleOff(aboutTabClass, activeMenu);
    activeMenuToggleOff(projectsTabClass, activeMenu);
    activeMenuToggleOff(resumeTabClass, activeMenu);
    activeMenuToggleOn(contactTabClass, activeMenu);
    $(aboutID).hide();
    $(projectsID).hide();
    $(resumeID).hide();
    $(contactID).show();

};

function events() {

    $(aboutTabClass).on('click',onClickAboutMe);
    $(projectsTabClass).on('click',onClickProjects);
    $(resumeTabClass).on('click',onClickResume);
    $(contactTabClass).on('click',onClickContactMe);
}

function activeMenuToggleOn (menuOption, classToAdd){
    if (!$(menuOption).hasClass(classToAdd)){
        $(menuOption).addClass(classToAdd);
    }
}

function activeMenuToggleOff (menuOption, classToRemove) {

    if ($(menuOption).hasClass(classToRemove)) {
        $(menuOption).removeClass(classToRemove);
    }

}
