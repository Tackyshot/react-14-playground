"use strict";
module.exports  = new class Index{
    constructor(){

        this.options = {
            method: ['GET', 'POST', 'PUT', 'DELETE'],
            path: "/api/names",
            handler: {names:{}}
        }

    }

    getHandler(){
        const fs = require('fs');

        var register = function(Server, options, next){
            var names = require(__dirname + '/../../assets/data/names.js');

            var handler = function(route, options){

                return function (req, res){

                    console.log("METHOD:", req.method);

                    switch(req.method){
                        case "get":
                            res(names)
                                .type("application/json");
                        break;

                        case "post":
                            let newName = req.payload.name;
                            names.names.push(newName);

                            res(names)
                                .type("application/json");
                        break;
                    }

                }

            };

            Server.handler("names", handler);
            next();
        };

        register.attributes = {
            name: "handler-names",
            version: "1.0.0"
        };

        return register;

    } //handler

    getOptions(){

        return this.options;
    }

};