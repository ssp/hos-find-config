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
