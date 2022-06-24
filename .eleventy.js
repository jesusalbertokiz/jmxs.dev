const {DateTime} = require("luxon");

module.exports = function(eleventyconfig){

    eleventyconfig.addPassthroughCopy('./src/css')
    eleventyconfig.addPassthroughCopy('./src/assets')
    eleventyconfig.addPassthroughCopy('./src/js')
    eleventyconfig.addPassthroughCopy('./src/webfonts')

    eleventyconfig.addPassthroughCopy("postDate", (dateObj) => {
        return DateTime.fromJSDate.toLocaleString(DataTime.DATE_MED)
    })

    return{
        dir:{
            input:"src",
            output:"public"
        }
    }
};