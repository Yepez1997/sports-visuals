#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import jinja2
import sys
import json
import os

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_environment = jinja2.Environment(
    loader = jinja2.FileSystemLoader(template_dir))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        my_vars = {"name":"Aureliano"}
        js = "var blah='coffee';"
        js += "var matrix = [      [    0.  ,  4836.15,   835.07,   846.4 ],       [ 4836.15,     0.  ,  6291.64,  5759.34],       [  835.07,  6291.64,     0.  ,  4848.59],       [  846.4 ,  5759.34,  4848.59,     0.  ] ];"
        jsfinal = "<script type='text/javascript'>" + js + "</script>"
        panda = 1+3
        my_vars["cookies"] = panda
        my_vars['jstags'] = jsfinal

        template = jinja_environment.get_template('template.html')
        self.response.write(template.render(my_vars))


app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)



app.run()