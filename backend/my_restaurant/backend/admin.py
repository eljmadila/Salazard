from django.contrib import admin
from unfold.admin import ModelAdmin
# pyrefly: ignore [missing-import]
from .models import Menu, Reservation, Blog, Testimonial

@admin.register(Menu)
class MenuAdmin(ModelAdmin):
    pass

@admin.register(Reservation)
class ReservationAdmin(ModelAdmin):
    pass

@admin.register(Blog)
class BlogAdmin(ModelAdmin):
    pass

@admin.register(Testimonial)
class TestimonialAdmin(ModelAdmin):
    pass