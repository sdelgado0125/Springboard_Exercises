from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField, URLField
from wtforms.validators import DataRequired, Optional, URL, NumberRange

class PetForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    species = StringField('Species', validators=[DataRequired()])
    photo_url = URLField('Photo URL', validators=[Optional(), URL()])
    age = IntegerField('Age', validators=[Optional(), NumberRange(min=0, max=30)])
    notes = StringField('Notes', validators=[Optional()])

class EditPetForm(FlaskForm):
    photo_url = URLField('Photo URL', validators=[Optional(), URL()])
    notes = StringField('Notes', validators=[Optional()])
    available = BooleanField('Available')
