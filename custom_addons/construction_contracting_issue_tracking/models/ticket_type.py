# -*- coding: utf-8 -*-

from odoo import models, fields

class ConstructionTicketType(models.Model):
    _name = 'construction.ticket.type'
    _description = 'Construction Ticket Type'
    
    name = fields.Char(
        'Name',
        required=True,
    )
