import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownCircleComponent } from './countdown-circle.component';

describe('CountdownCircleComponent', () => {
    let component: CountdownCircleComponent;
    let fixture: ComponentFixture<CountdownCircleComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [CountdownCircleComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(CountdownCircleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
