from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r"menu", views.MenuViewSet)
router.register(r"reservation", views.ReservationViewSet)
router.register(r"blog", views.BlogViewSet)
router.register(r"testimonial", views.TestimonialViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]