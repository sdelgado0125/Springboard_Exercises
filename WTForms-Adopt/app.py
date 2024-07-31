from flask import Flask, render_template, request, redirect, url_for
from models import db, Pet, connect_db
from flask_debugtoolbar import DebugToolbarExtension
from forms import PetForm, EditPetForm

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pets.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['DEBUG_TB_ENABLED'] = True

connect_db(app)

toolbar = DebugToolbarExtension(app)

@app.route('/')
def home():
    pets = Pet.query.all()
    return render_template('home.html', pets=pets)

@app.route('/add', methods=['GET', 'POST'])
def add_pet():
    form = PetForm()
    if form.validate_on_submit():
        pet = Pet(
            name=form.name.data,
            species=form.species.data,
            photo_url=form.photo_url.data,
            age=form.age.data if form.age.data else None,
            notes=form.notes.data,
        )
        db.session.add(pet)
        db.session.commit()
        return redirect(url_for('home'))
    return render_template('add_pet.html', form=form)

@app.route('/<int:pet_id>', methods=['GET', 'POST'])
def edit_pet(pet_id):
    pet = Pet.query.get_or_404(pet_id)
    form = EditPetForm(obj=pet)
    if form.validate_on_submit():
        pet.photo_url = form.photo_url.data
        pet.notes = form.notes.data
        pet.available = form.available.data
        db.session.commit()
        return redirect(url_for('home'))
    return render_template('edit_pet.html', form=form, pet=pet)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        if not Pet.query.all():
            sample_pet = Pet(name='Fluffy', species='cat', available=True)
            db.session.add(sample_pet)
            db.session.commit()
    app.run(debug=True)
