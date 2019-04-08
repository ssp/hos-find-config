config.contentObjectExceptionHandler = 0

page.includeJS {
    00jQuery = typo3conf/find/js/jquery.min.js
    01jQueryUi = typo3conf/find/js/jquery-ui-1.12.1/jquery-ui.min.js
    02flot = typo3conf/find/js/jquery-flot-0.8.3/jquery.flot.min.js
    03flot = typo3conf/find/js/jquery-flot-0.8.3/jquery.flot.selection.js

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
            0 {
                autocomplete = 1
            }

            10 {
                id = title
                type = Text
                extended = 1
            }
        }

        standardFields {
            title = title
            snippet = creatorName
        }

        facets {
            10 {
                id = collection
                field = source
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
                displayDefault = 1000
                barWidth = 1
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

        highlight {
            default {
                fields {
                    f1 = title
                    f2 = creatorName
                }
                query = %s
                useQueryTerms = 1
                useFacetTerms = 1
            }
        }

        languageRootPath = typo3conf/find/i18n/

        CSSPaths {
            30 = typo3conf/find/css/subhh.css
            40 = typo3conf/find/js/jquery-ui-1.12.1/jquery-ui.min.css
        }
    }

    view {
        partialRootPaths {
            20 = typo3conf/find/subhh-hos-main/Partials
        }

        templateRootPaths {
            20 = typo3conf/find/subhh-hos-main/Templates
        }
    }

}
