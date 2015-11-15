<?php
header('Content-Type: text/html');
?>
<div id="abrasions">
    <ul class="nav nav-tabs edunav">
        <li class="active"><a class="tab-nav-action" href="#causes" role="tab" data-toggle="tab" aria-controls="causes" aria-expanded="true">Causes</a></li>
        <li><a class="tab-nav-action" href="#treatment" role="tab" data-toggle="tab" aria-controls="treatment"
               aria-expanded="false">Treatment</a>
        </li>
        <li><a class="tab-nav-action" href="#quiz" role="tab" data-toggle="tab" aria-controls="quiz" aria-expanded="false">Quiz</a></li>
    </ul>
    <div id="tab-content" class="tab-content">
        <div role="tabpanel" class="tab-pane fade in active" id="causes">
            <p>
                Lacerations, also typically known as cuts, are rather common injuries. These types of injuries result in a
                separation of the skin at the point of injury. While the terms can be used interchangeably, a laceration can
                describe a
                more rough and jagged wound, while a cut is usually a more clean and straight wound. Most of these injuries are
                small
                or shallow and do not cause much bleeding or injury. There are certain locations, such as the hands and scalp, that
                tend to bleed a bit even from a minor cut. Cuts to veins or arteries will also bleed more profusely. Deep cuts can
                be
                serious injuries. They can end up damaging tendons, muscle, and even bone or internal organs. Depending on the
                severity
                of the cut, there may be some pain at the wound site. This should subside within a day (depending on severity).
            </p>
            <p>
                A concern with cuts is infection. Because the skin is broken, it is very possible for foreign particles to enter the
                wound. Even just germs or bacteria in the wound could cause an infection. Infections can be very serious if not
                treated, so even a minor wound can become life threatening if infection sets in. Infections are much more common in
                deeper cuts. Some signs of infection are continuing pain, the wound becoming red and swollen, and pus.
            </p>
        </div>
        <div role="tabpanel" class="tab-pane fade" id="treatment">
            <p>
                Minor cuts are rather common and most people are familiar with how to treat them. The first step in treatment is to
                stop the bleeding. For minor cuts this can easily be accomplished by applying pressure to the wound. If the cut is
                deep
                or bleeding more vigorously, elevating it above the heart can help to slow the bleeding. Unless the cut is very deep
                or serious, it is not recommended to apply a tourniquet. Cleaning the wound is very important. If possible, wash the
                wound with soap and water to clean out foreign particles. Large particles, like glass shards or splinters should be
                picked out. It is not recommended to use alcohol, iodine, peroxide, or other such cleaning agents as it could
                further
                damage tissue and slow down healing, although small amounts wouldn’t hurt especially if there were foreign particles
                present. For small cuts, a bandage and some antibacterial ointment are sufficient. If the person is in pain, apply
                an
                ice pack. More serious cuts may require stitches. Most cuts will heal in a few days by scabbing over.
            </p>
            <p>
                Minor and shallow cuts don’t require medical attention. Deep cuts, especially those where internal injuries are
                suffered, should be brought to the attention of medical authorities immediately. If bleeding has not ceased after
                several minutes of applying pressure or a bandage, seek medical attention. If the victim has not had a tetanus
                vaccination in the past five years and the wound has been exposed to foreign materials, help should be sought
                immediately.
            </p>
        </div>
        <div role="tabpanel" class="tab-pane fade" id="quiz">
            <p>Soon</p>
        </div>
    </div>
</div>
<script>
    jQuery(function($){
        $("#abrasions").on("click", ".tab-nav-action", function(e){
            e.preventDefault();
            $(this).tab("show");
        });
    });
</script>



