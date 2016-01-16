#!/usr/bin/env python
# -*- coding: UTF-8 -*-

# enable debugging

"""Retrieves json data from ratemyprofessor"""
import cgitb, cgi
import urllib2
cgitb.enable()

print "Content-Type: text/plain;charset=utf-8"
print	

# Use forms to gather professor's name
form = cgi.FieldStorage()
fname = form.getvalue('fname')
lname = form.getvalue('lname')

pageUrl = "http://ratemyprofessors.com/find/professor/?department=&page=1&query=" + fname + "+" + lname + "&queryoption=TEACHER&queryBy=schoolId&sid=1420&sortBy="

response = urllib2.urlopen(pageUrl)
html = response.read()

# Print gathered html to page for extraction
print html



