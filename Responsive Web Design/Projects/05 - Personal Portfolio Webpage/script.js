'use strict';

/* Burger Menu */
const body = document.getElementById('body');
const nav = document.getElementById('l-nav');
const burger = document.getElementById('burger');
const links = document.querySelectorAll('.l-nav a');

burger.addEventListener('click', () => {
    navToggle();
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        if (burger.className == 'burger is-toggle') {
            navToggle();
        }
    });
});

function navToggle() {
    burger.classList.toggle('is-toggle');
    nav.classList.toggle('is-open');
    body.classList.toggle('nav-is-open'); // disable body overflow
}

/* Project type menu */
const button_all = document.getElementById('button-all');
const button_pages = document.getElementById('button-pages');
const button_emails = document.getElementById('button-emails');
const buttons = [button_all, button_pages, button_emails];
var current_state = button_all;
const pages_projects = document.querySelectorAll('.pages');
const emails_projects = document.querySelectorAll('.emails');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (current_state != button) {
            button.classList.toggle('is-active');
            current_state.classList.toggle('is-active');
            current_state = button;

            if (button == button_all || button == button_pages) {
                toggle('pages', 'show');
            } else {
                toggle('pages', 'hide');
            }

            if (button == button_all || button == button_emails) {
                toggle('emails', 'show');
            } else {
                toggle('emails', 'hide');
            }
        }
    });
});

function toggle(target, mode) {
    var projects;

    if (target == 'pages') {
        projects = pages_projects;
    } else {
        projects = emails_projects;
    }

    if (mode == 'hide') {
        projects.forEach((project) => {
            project.classList.add('hide');
        });
    } else {
        projects.forEach((project) => {
            project.classList.remove('hide');
        });
    }
}

/* Project Display */
const projects = ['1', '2', '3', '4'];
var project, closes;

projects.forEach((index) => {
    project = document.getElementById('project-' + index);
    closes = document.querySelectorAll('.project-' + index + '-close');

    project.addEventListener('click', () => {
        document.getElementById('project-' + index + '-details').classList.toggle('hidden');
        body.classList.toggle('nav-is-open'); // hide overflow
    });

    closes.forEach((close) => {
        close.addEventListener('click', () => {
            document.getElementById('project-' + index + '-details').classList.toggle('hidden');
            body.classList.toggle('nav-is-open'); // hide overflow
        });
    });
});
