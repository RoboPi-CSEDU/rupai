#!/usr/bin/python3
from http.server import BaseHTTPRequestHandler,HTTPServer
from os import curdir, sep
import subprocess
#import template
import shutil
import cgi, cgitb 
import importlib
import sys
import re

PORT_NUMBER = 9980

#This class will handles any incoming request from
#the browser 
class myHandler(BaseHTTPRequestHandler):
	
	    
	#Handler for the GET requests
	def do_GET(self):
		if re.match( r'^/((?!\.).)*$', self.path, re.M|re.I):
			self.path="/index.html"

		try:
			#Check the file extension required and
			#set the right mime type

			sendReply = False
			if self.path.endswith(".html"):
				mimetype='text/html'
				sendReply = True
			if self.path.endswith(".txt"):
			    mimetype='text/plain'
			    sendReply = True
			if self.path.endswith(".jpg"):
				mimetype='image/jpg'
				sendReply = True
			if self.path.endswith(".gif"):
				mimetype='image/gif'
				sendReply = True
			if self.path.endswith(".js"):
				mimetype='application/javascript'
				sendReply = True
			if self.path.endswith(".css"):
				mimetype='text/css'
				sendReply = True
			if self.path.endswith(".png"):
				print("***********png request received*******")
				mimetype='image/png'
				sendReply = True
			if self.path.endswith(".svg"):
				print("***********svg request received*******")
				mimetype='image/svg+xml'
				sendReply = True
			if self.path.endswith(".mp3"):
			    mimetype='audio/mpeg'
			    sendReply = True
			if self.path.endswith(".ico"):
			    mimetype='image/x-icon'
			    sendReply = True
			if self.path.endswith(".wav"):
			    mimetype='audio/wav'
			    sendReply = True
			if self.path.endswith(".cur"):
			    mimetype='application/octet-stream'
			    sendReply = True


			if sendReply == True:
				#Open the static file requested and send it
				f = open(curdir + sep +"editor"+ sep+ self.path,'rb')
				self.send_response(200)
				self.send_header('Content-type',mimetype)
				self.end_headers()
				self.wfile.write(f.read())
				f.close()
			return
	

		except IOError:
			self.send_error(404,'File Not Found: %s' % self.path)

	def do_POST(self):
		# Doesn't do anything with posted data
        
		form = cgi.FieldStorage(
			fp=self.rfile, 
			headers=self.headers,
			environ={'REQUEST_METHOD':'POST',
				     'CONTENT_TYPE':self.headers['Content-Type'],
		})
		
		print("Your code is: %s" % form["code"].value)
		print("Your event is: %s" % form["event"].value)
		self.send_response(200)
		self.end_headers()
		self.wfile.write(("$RoboPI: %s " % form["code"].value).encode())
		self.wfile.write(("$RoboPI: %s " % form["event"].value).encode())
		shutil.copy('template.py','main.py', )
		file = open("main.py","a")
		file.write(form["event"].value)
		file.write("\n")
		file.write(form["code"].value)
		file.write("\n")
		file.write("stop()\n")
		file.close()

		#my_module = importlib.import_module('main.py')
		#sys.path.append("/home/pi/Desktop/robopi-frontend/")
		#my_module.run()
		subprocess.call("/home/pi/rupai/main.py", shell=True)
		#test.run(form["code"].value)
		return			
		
try:
	#Create a web server and define the handler to manage the
	#incoming request
	server = HTTPServer(('', PORT_NUMBER), myHandler)
	print('Started httpserver on port ' , PORT_NUMBER)
	
	#Wait forever for incoming htto requests
	server.serve_forever()
	subprocess.call("/home/pi/rupai/init.py", shell=True)

except KeyboardInterrupt:
	print('^C received, shutting down the web server')
	server.socket.close()
	
