#config.contentObjectExceptionHandler = 0

page.includeJS {
    00jQuery = typo3conf/find/js/jquery.min.js
    
    10flot = https://cdnjs.cloudflare.com/ajax/libs/flot/0.8.3/jquery.flot.min.js
    11flot = https://cdnjs.cloudflare.com/ajax/libs/flot/0.8.3/jquery.flot.selection.js

    20heatmap = typo3conf/find/js/vendor/heatmap.js
    21heatmap = typo3conf/find/js/Cloudflare/leaflet/1.3.1/leaflet.js
    22heatmap = typo3conf/find/js/vendor/heatmap-leaflet.js
    24heatmap = typo3conf/find/js/Cloudflare/fancybox/3.3.5/jquery.fancybox.min.js
    23heatmap = typo3conf/find/js/schaufenster.heatmap.js

    30ddc = typo3conf/find/js/ddc.js
}

plugin.tx_find {
    settings {
        connections.default.options {
            host = 127.0.0.1
            port = 8983
            path = /solr/hos
        }

        queryFields {
            10 {
                id = title
                type = Text
                extended = 1
            }
        }

        facets {
            10 {
                id = source
            }

            20 {
                id = openaccess
                field = rightsOA
            }

            30 {
                id = year
                field = publicationYear
                type = Histogram
                excludeOwnFilter = 1
                sortOrder = index
                fetchMaximum = 1000
                displayDefault = 1000
            }

            40 {
                id = map
                field = geoLocationPoint
                type = Heatmap
            }

            50 {
                id = publisher
                field = publisher_facet
            }

            60 {
                id = subject
            }

            70 {
                id = ddc
                field = subject_ddc
                sortOrder = index
            }

            80 {
                id = creator
                field = creatorName_facet
            }

            90 {
                id = type
                field = resourceType
            }

            100 {
                id = language
            }
        }

        languageRootPath = typo3conf/find/i18n/

        CSSPaths {
            30 = typo3conf/find/subhh.css
        }
    }

    view {
        partialRootPaths {
            20 = typo3conf/find/Partials
        }

        templateRootPaths {
            20 = typo3conf/find/Templates
        }
    }

}
