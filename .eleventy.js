const {DateTime} = require("luxon");

module.exports = function(eleventyconfig){

    eleventyconfig.addPassthroughCopy('./src/css')
    eleventyconfig.addPassthroughCopy('./src/assets')
    eleventyconfig.addPassthroughCopy('./src/js')
    eleventyconfig.addPassthroughCopy('./src/webfonts')


    return{
        dir:{
            input:"src",
            output:"public"
        }
    }
}