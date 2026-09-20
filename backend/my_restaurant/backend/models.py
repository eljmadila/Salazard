from django.db import models

class Menu(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    price = models.CharField(max_length=50, blank=True, null=True)

    class category(models.TextChoices):
        Starters = 'Starters'
        Main_Courses = 'Main Courses'
        Desserts = 'Desserts'
        Drinks = 'Drinks'
        Uncategorized = 'Uncategorized'
    category = models.CharField(max_length=100, choices=category.choices, default='Uncategorized')
    photo_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.description}"

class Reservation(models.Model):
    fullname = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    date = models.DateField()
    time = models.TimeField()
    number_of_people = models.CharField(max_length=20, default='2')
    special_request = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return f"{self.fullname} - {self.date} - {self.time}"

class Blog(models.Model):
    title = models.CharField(max_length=100)
    excerpt = models.CharField(max_length=255)
    date = models.DateField()
    author = models.CharField(max_length=100)
    image = models.URLField(blank=True, null=True)
    category = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.title} - {self.excerpt}"

class Testimonial(models.Model):
    name = models.CharField(max_length=255)
    text = models.TextField()
    rating = models.IntegerField(default=5)

    def __str__(self):
        return f"{self.name} - {self.rating} Stars"
