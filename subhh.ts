page.includeJS.00jQuery = typo3conf/find/js/jquery.min.js
page.includeJS.10flot = https://cdnjs.cloudflare.com/ajax/libs/flot/0.8.3/jquery.flot.min.js
page.includeJS.11flot = https://cdnjs.cloudflare.com/ajax/libs/flot/0.8.3/jquery.flot.selection.js

plugin.tx_find {
    settings {
        connections.default.options {
            host = 127.0.0.1
            port = 8983
            path = /solr/hos
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
                sortOrder = index
                fetchMaximum = 1000
                displayDefault = 1000
            }

            40 {
                id = map
                field = geoLocationPoint
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
            20 = typo3conf/find/subhh.css
        }
    }
}
