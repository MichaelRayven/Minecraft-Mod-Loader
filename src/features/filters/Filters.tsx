import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Chip from "../chip/Chip";
import Dropdown from "../dropdown/Dropdown";
import DropdownItem from "../dropdown/DropdownItem";
import RadioButton from "../radiogroup/RadioButton";
import RadioGroup from "../radiogroup/RadioGroup";
import { changeEnvironment, environment, toggleAlpha, toggleBeta, toggleRelease } from "./filtersSlice";
import './Filters.css'

type Props = {};

const Filters = (props: Props) => {
  const state = useAppSelector((state) => state.filters);
	const dispatch = useAppDispatch()

	useEffect(() => {
		
	}, [])

  return <div>
		<section className="filters">
        <h1 className="filters__header">Filters</h1>

        <h3 className="filters__section-header" >Release type:</h3>
        <div className="filters__chips">
          <Chip name="Alpha" color="#F75757" onClick={() => dispatch(toggleAlpha())} enabled={state.alpha} />
          <Chip name="Beta" color="#F8C81F" onClick={() => dispatch(toggleBeta())} enabled={state.beta} />
          <Chip name="Release" color="#6EF14D" onClick={() => dispatch(toggleRelease())} enabled={state.release} />
        </div>

				<h3 className="filters__section-header" >Environment:</h3>
				<RadioGroup
					className="filters__radio-group"
					groupName="environment"
					onSelected={(e) => {dispatch(changeEnvironment(e))}}
				>
					<RadioButton label="Client" value={environment.CLIENT} checked={state.environment === environment.CLIENT} />
					<RadioButton label="Server" value={environment.SERVER} checked={state.environment === environment.SERVER} />
				</RadioGroup>

				<h3 className="filters__section-header" >Game version:</h3>
				<Dropdown
					placeholder="Select game version..."
					onChange={() => {}}
				>
					<DropdownItem label="placeholder" value={0}/>
				</Dropdown>

				<h3 className="filters__section-header" >Mod loader:</h3>
				<Dropdown
					placeholder="Select game version..."
					onChange={() => {}}
				>
					<DropdownItem label="placeholder" value={0}/>
				</Dropdown>
      </section>
	</div>;
};

export default Filters
