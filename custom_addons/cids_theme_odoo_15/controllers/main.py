
from odoo.http import request
from odoo import http

class DemoClass(http.Controller):

    @http.route(['/landing'], type='http', auth="public", website=True)
    def landing_page(self, **post):
        return request.render("cids_theme_odoo_15.landing_page")
    @http.route(['/commercial'], type='http', auth="public", website=True)
    def commercial_page(self, **post):
        return request.render("cids_theme_odoo_15.commercial")

